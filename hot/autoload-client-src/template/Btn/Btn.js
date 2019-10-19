import dom from '../dom';

export default class Btn {
    constructor(props = {}) {
        this.props = props;
    }

    render() {
        let { title, onclick, color } = this.props;

        return (
            <button className="livereload-HMR-btn" title={title} onclick={onclick} style={`--color: ${color}`}>
                LiveReload
            </button>
        );
    }
}
