import EventEmitter from './services/EventEmitter';

export default class ClientController extends EventEmitter {
    constructor(clientConfig) {
        super();

        this.publicPath = `${clientConfig.https ? 'https' : 'http'}://${clientConfig.host}:${clientConfig.port}/`;
        console.log('ClientController: ', this.publicPath);

        this.init();
    }

    init() {
        if (!window.hotClient) {
            window.hotClient = new EventEmitter();
        }

        window.hotClient.on('open', e => this.emit('open', e));
        window.hotClient.on('close', e => this.emit('close', e));
        window.hotClient.on('message', e => this.emit('message', e));
        window.hotClient.on('error', e => this.emit('error', e));
    }
}
