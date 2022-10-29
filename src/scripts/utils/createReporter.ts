/* global console: false */

interface IReporter {
    log: Function;
    warn: Function;
    error: Function;
    dir: Function;
}

const noop = () => {};

/**
 * @description Репортер, используемый для вывода логов, предупреждений и ошибок вместо console.
 * @param {boolean|undefined} quiet Флаг, запрещающий выводить сообщения в консоль.
 * @returns {IReporter} Возвращает объект репортера с методами log, warn, error, dir.
 */
const createReporter = (quiet: boolean | undefined = false): IReporter => {
    const reporter: IReporter = {
        log: noop,
        warn: noop,
        error: noop,
        dir: noop
    };

    if (!quiet && window.console) {
        const attachFunction = (reporter: IReporter, name: keyof IReporter) => {
            reporter[name] = (...args: any[]) => {
                const f = window.console[name];
                f.apply(window.console, args);
            };
        };

        attachFunction(reporter, 'log');
        attachFunction(reporter, 'warn');
        attachFunction(reporter, 'error');
        attachFunction(reporter, 'dir');
    }

    return reporter;
};

export default createReporter;
export { createReporter, IReporter };
