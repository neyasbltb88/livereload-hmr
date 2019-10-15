import dom from '../dom';
import './Btn.sass';

export default class Btn {
    constructor(props = {}) {
        this.props = props;
        // console.log('Btn props: ', props);
    }

    render() {
        return <button className="live-reload-btn">LiveReload</button>;
    }

    //
}
