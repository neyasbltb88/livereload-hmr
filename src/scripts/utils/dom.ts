import reporter from './reporter';

const dom = (tag: string | Function, attrs: Record<string, any>, ...children: (HTMLElement | string | number)[]) => {
    // Другие JSX компоненты будут функциями dom, их надо просто вызвать
    if (typeof tag === 'function') return tag();

    // Обычные HTML-теги будут приходить сюда строками
    if (typeof tag === 'string') {
        const element = document.createElement(tag);

        // TODO: Реализовать возможность передавать в class или className объект и массив
        if (attrs?.class) {
            const className = attrs.className ? attrs.className + ' ' : '';
            attrs.className = className + attrs.class;
            delete attrs.class;
        }
        // Вкидываем на элемент объект атрибутов
        Object.assign(element, attrs);

        // Фрагменты для добавления нескольких дочерних элементов к начальному узлу
        const fragments = document.createDocumentFragment();

        // Обрабатываем дочерние элементы
        children.forEach(child => {
            if (child instanceof HTMLElement) {
                // HTML-элементы сразу добавляем к фрагментам как есть
                fragments.appendChild(child);
            } else if (typeof child === 'string' || typeof child === 'number') {
                // Из строк и чисел сначала делаем текстовые ноды перед добавлением к фрагментам
                const textnode = document.createTextNode(String(child));
                fragments.appendChild(textnode);
            } else {
                // На случай, если в качестве дочерних элементов попадет что-то странное
                reporter.log('Дочерний элемент не поддерживаемого типа', { tag, attrs, child });
            }
        });
        element.appendChild(fragments);

        return element;
    }
};

export default dom;
