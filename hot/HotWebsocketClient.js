const BaseClient = require('./client-src/clients/BaseClient');

module.exports = class WebsocketClient extends BaseClient {
    constructor(url) {
        super();

        this.client = new WebSocket(url.replace(/^http/, 'ws'));
        this.isOpen = false;

        this.client.onopen = e => this._openHandler(e);
        this.client.onclose = e => this._closeHandler(e);
        this.client.onmessage = e => this._messageHandler(e);
        this.client.onerror = e => this._errorHandler(e);

        this.earlyEvents = window.hotClient ? window.hotClient.events : {};
        window.hotClient = this;
    }

    static getClientPath(options) {
        return require.resolve('./HotWebsocketClient');
    }

    _openHandler(e) {
        this.isOpen = true;
        this.emit('open', e);
    }

    _closeHandler(e) {
        this.isOpen = false;
        this.emit('close', e);
    }

    _messageHandler(e) {
        this.emit('message', e.data);
    }

    _errorHandler(e) {
        this.isOpen = false;
        console.log('hotClient ERROR: ', e);

        this.emit('error', e);
    }

    onOpen(f) {
        this.one('open', f);
    }

    onClose(f) {
        this.one('close', f);
    }

    onMessage(f) {
        this.one('message', f);
    }
};
