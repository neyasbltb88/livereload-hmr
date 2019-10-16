import dom from '../dom';
import './Btn.sass';

export default class Btn {
    constructor(props = {}) {
        this.props = props;
    }

    render() {
        let { onclick, color } = this.props;

        return (
            <button className="live-reload-btn" onclick={onclick} style={`--color: ${color}`}>
                LiveReload
            </button>
        );
    }
}
