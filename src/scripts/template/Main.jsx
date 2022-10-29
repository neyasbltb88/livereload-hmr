import './styles/style.css';

import TSXComponent from './TSXComponent';

export default function Main() {
    return (
        <div className="header-container">
            <h1>Hello from Livereload HMR!</h1>
            <div className="plus">+</div>
            <TSXComponent />
        </div>
    );
}
