import Template from './template';

if (window.top === window) {
    const app = document.body;
    let template = new Template('#livereload-HMR');
    window.template = template;
    template.mount(app);
    template.tryConnect();

    // Код для горячего обновления модуля
    if (module.hot) {
        module.hot.accept();
    }
}
