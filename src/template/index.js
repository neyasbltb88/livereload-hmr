import dom from './dom';
import clientConfig from '../../client.config';
import ClientController from '../ClientController';
import Log from '../services/log';
import Btn from './Btn';

import './index.sass';

export default class Template {
    constructor(id) {
        this.log = new Log();
        this.target = null;
        this.id = id.startsWith('#') ? id.slice(1) : id;
        this.publicPath = `${clientConfig.https ? 'https' : 'http'}://${clientConfig.host}:${clientConfig.port}/`;

        this.clientController = new ClientController(this.publicPath);
        window.clientController = this.clientController;

        this.clientController.on('loaded', url => this.log('default', '*ScriptsAutoload* Загружен на страницу:', url));
        this.clientController.on('invalid', () => {
            if (clientConfig.displayAwait) {
                this.setState({
                    connectStatus: 'await'
                });
            }
        });

        this.clientController.on('ok', () => {
            this.setState({
                connectStatus: 'init'
            });
        });

        this.clientController.on('open', e => {
            if (!this.state.isConnected) {
                this.log('success', '*ScriptsAutoload* Подключен к серверу:', this.publicPath);
                this.setState({
                    connectStatus: 'init',
                    isInit: true,
                    isConnected: true
                });
            }
        });

        this.clientController.on('await', e => {
            this.setState({
                connectStatus: 'await'
            });
        });

        this.clientController.on('warning', e => {
            this.log('warning', '*ScriptsAutoload* Ошибка загрузки скрипта:', e);
            this.setState({
                connectStatus: 'warning'
            });
        });

        this.clientController.on('close', e => {
            this.log('error', '*ScriptsAutoload* Закрыто соединение с сервером:', this.publicPath);
            this.setState({
                connectStatus: 'error',
                isConnected: false
            });
        });

        this.state = {
            connectStatus: 'notInit',
            isInit: false,
            isConnected: false
        };

        this.status = {
            notInit: {
                handler: e => {
                    this.setState({
                        connectStatus: 'await'
                    });
                    this.clientController.start();
                },
                color: '#C3CFE0'
            },
            init: {
                handler: e => {
                    this.setState({
                        connectStatus: 'notInit'
                    });
                    this.clientController.stop();
                },
                color: '#85D035'
            },
            await: {
                handler: e => console.log('Click await'),
                color: '#FFC000'
            },
            error: {
                handler: e => {
                    this.setState({
                        connectStatus: 'await'
                    });
                    this.clientController.start();
                },
                color: '#F92672'
            },
            warning: {
                handler: e => console.log('Click warning'),
                color: '#FD971F'
            }
        };
    }

    tryConnect() {
        this.clientController.getScripts();
    }

    setState(newState = {}) {
        let oldState = { ...this.state };
        this.state = {
            ...oldState,
            ...newState
        };

        if ((this.state.connectStatus === 'error' || this.state.connectStatus === 'await') && !this.state.isInit) {
            return;
        }

        this.mount();
    }

    mount(target = this.target) {
        this.target = target;
        let template = target.querySelector('#' + this.id);
        if (template) {
            template.replaceWith(this.render());
        } else {
            target.appendChild(this.render());
        }
    }

    render() {
        let { connectStatus } = this.state;
        let { handler, color } = this.status[connectStatus];

        return (
            <div id={this.id}>
                <Btn color={color} onclick={handler} />
            </div>
        );
    }
}
