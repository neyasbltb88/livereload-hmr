let Main = require('./template/Main').default;

const render = () => {
    app.appendChild(main);
};

const app = document.body;
let main = Main();
render();

// Код для горячего обновления модуля
if (module.hot) {
    module.hot.accept('./template/Main', () => {
        app.removeChild(main);

        Main = require('./template/Main').default;
        main = Main();

        render();
    });
}
