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

        // Состояние
        this.state = {
            connectStatus: 'ready',
            wasInit: false,
            isConnected: false,
            notLoaded: new Set()
        };

        // Событие успешной подгрузки ресурса с локального сервера
        this.clientController.on('loaded', url => {
            this.log('default', '*ScriptsAutoload* Загружен на страницу:', url);
            let { notLoaded } = this.state;
            notLoaded.delete(url);
            this.setState({ notLoaded });
        });

        // Событие соединения сокета с локальным сервером
        this.clientController.on('open', () => {
            this.log('success', '*ScriptsAutoload* Подключен к серверу:', this.publicPath);
        });

        // Событие изменения файла проекта(происходит во время перекомпиляции модуля)
        this.clientController.on('invalid', () => {
            if (clientConfig.displayAwait) this.setState({ connectStatus: 'await' });
        });

        // Событие завершения компиляции, так же вызывается после события 'open'
        this.clientController.on('ok', () => {
            this.setState({
                connectStatus: 'init',
                wasInit: true,
                isConnected: true
            });
        });

        // Событие начала подгрузки ресурсов с локального сервера
        this.clientController.on('await', () => {
            this.setState({ connectStatus: 'await' });
        });

        // Событие ошибки загрузки ресурса с локального сервера
        this.clientController.on('warning', e => {
            this.log('warning', '*ScriptsAutoload* Ошибка загрузки ресурса:', e);
            let { notLoaded } = this.state;
            notLoaded.add(e);
            this.setState({ notLoaded });
        });

        // Событие отключения сокета от локального сервера
        this.clientController.on('close', () => {
            this.log('error', '*ScriptsAutoload* Закрыто соединение с сервером:', this.publicPath);
            this.setState({
                connectStatus: 'error',
                isConnected: false
            });
        });

        // Объект, описывающий вид/поведение для определенных состояний
        this.status = {
            ready: {
                handler: () => {
                    this.setState({ connectStatus: 'await' });
                    this.clientController.start();
                },
                color: '#C3CFE0',
                title: `Подключиться к серверу ${this.publicPath}`
            },
            init: {
                handler: () => {
                    this.setState({ connectStatus: 'ready' });
                    this.clientController.stop();
                },
                color: '#85D035',
                title: `Отключиться от сервера ${this.publicPath}`
            },
            await: {
                handler: () => {},
                color: '#FFC000',
                title: 'Ожидание ресурса'
            },
            error: {
                handler: () => {
                    this.setState({ connectStatus: 'await' });
                    this.clientController.start();
                },
                color: '#F92672',
                title: 'Отключен от сервера ' + this.publicPath
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

        if (!this.state.wasInit && (this.state.connectStatus === 'error' || this.state.connectStatus === 'await')) {
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
        let { connectStatus, notLoaded } = this.state;
        let { handler, color, title } = this.status[connectStatus];

        // Если есть ошибки загрузки ресурсов
        if (notLoaded.size > 0) {
            let notLoadedList = '';
            notLoaded.forEach(err => (notLoadedList += '\n' + err));
            title = `Ошибка загрузки: ${notLoadedList}`;
            color = '#FD971F';
        }

        return (
            <div id={this.id}>
                <Btn title={title} color={color} onclick={handler} />
            </div>
        );
    }
}
