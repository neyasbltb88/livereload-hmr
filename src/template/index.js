import dom from './dom';
import clientConfig from '../../client.config';
import ClientController from '../ClientController';
import Btn from './Btn';

import './index.sass';

export default class Template {
    constructor(id) {
        this.target = null;
        this.id = id.startsWith('#') ? id.slice(1) : id;

        this.clientController = new ClientController(clientConfig);
        window.clientController = this.clientController;

        this.clientController.on('open', e => console.log('====Template==== open: ', e));
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
        return (
            <div id={this.id}>
                <Btn />
            </div>
        );
    }
}
