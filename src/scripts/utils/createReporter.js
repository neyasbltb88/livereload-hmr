/* global console: false */

/**
 * @description Репортер, используемый для вывода логов, предупреждений и ошибок вместо console.
 * @param {boolean|undefined} quiet Флаг, запрещающий выводить сообщения в консоль.
 * @returns {object} Возвращает объект репортера с методами log, warn, error.
 */
const createReporter = (quiet) => {
    const noop = () => {};

    let reporter = {
        log: noop,
        warn: noop,
        error: noop
    };

    if (!quiet && window.console) {
        const attachFunction = (reporter, name) => {
            reporter[name] = (...args) => {
                const f = window.console[name];
                f.apply(window.console, args);
            };
        };

        attachFunction(reporter, 'log');
        attachFunction(reporter, 'warn');
        attachFunction(reporter, 'error');
    }

    return reporter;
};

export default createReporter;
