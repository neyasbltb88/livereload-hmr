import EventEmitter from './services/EventEmitter';

export default class ClientController extends EventEmitter {
    constructor(publicPath) {
        super();

        this.publicPath = publicPath;

        this.init();
    }

    stop() {
        if (window.hotClient.isOpen === true) {
            window.hotClient.stop();
        }
    }

    start() {
        if (window.hotClient.isOpen === false) {
            window.hotClient.start();
        }
    }

    getScripts() {
        if (window.hotClient.isOpen) {
            this.emit('ok', window.hotClient);

            return false;
        }

        this.emit('await');
        this._fetchScriptsUrl()
            .then(urls => this._loadScripts(urls))
            .catch(() => {});
    }

    _fetchScriptsUrl() {
        return fetch(this.publicPath)
            .then(res => res.text())
            .then(page => {
                let urls = [];
                let parser = new DOMParser();
                let doc = parser.parseFromString(page, 'text/html');
                let scripts = doc.querySelectorAll('script');
                scripts.forEach(script => urls.push(this._normalizeSrc(script.getAttribute('src'))));
                return urls;
            });
    }

    // Приводит src скриптов к абсолютному виду
    _normalizeSrc(scriptUrl) {
        // Если не передан src, или это не строка, то выходим
        if (!scriptUrl || typeof scriptUrl !== 'string') return false;
        let result = false;
        // https://regex101.com/r/kvqlZe/2/
        let regex = /^http|^\/\//im;

        // Если src абсолютный, оставляем его как есть
        if (scriptUrl.search(regex) !== -1) {
            result = scriptUrl;

            // Если src относительный, дописываем к нему адрес локального сервера
        } else {
            // https://regex101.com/r/kvqlZe/3
            let replaceRegex = /^\W+/im;
            result = this.publicPath + scriptUrl.replace(replaceRegex, '');
        }

        return result;
    }

    _loadScripts(urls) {
        let url = urls.shift();
        return (
            fetch(url)
                .then(res => res.text())
                .then(script => this._appendScript(script))
                .then(() => {
                    this.emit('loaded', url);

                    if (urls.length > 0) {
                        return this._loadScripts(urls);
                    } else {
                        return true;
                    }
                })
                // .catch(() => this.emit('warning', url));
                .catch(err => {
                    console.log('catch', err);
                    // debugger;
                })
        );
    }

    _appendScript(script) {
        // let scriptEl = document.createElement('script');
        // scriptEl.textContent = script;
        // document.head.appendChild(scriptEl);

        return true;
    }

    _messageAnalyze(msg) {
        try {
            msg = JSON.parse(msg);

            if (msg.type) this.emit(msg.type, msg.data);
        } catch (err) {}
    }

    init() {
        if (!window.hotClient) {
            window.hotClient = new EventEmitter();
        }

        window.hotClient.one('open', () => {
            this.emit('open', window.hotClient);
            this.emit('ok', window.hotClient);
        });
        window.hotClient.one('close', () => this.emit('close', window.hotClient));
        window.hotClient.one('message', msg => this._messageAnalyze(msg));
        window.hotClient.one('error', e => this.emit('error', e));
    }
}
