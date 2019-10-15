// let Template = require('./template').default;
import Template from './template';

const app = document.body;
let template = new Template('#app');
template.mount(app);

// Код для горячего обновления модуля
if (module.hot) {
    module.hot.accept();
}
