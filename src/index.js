import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <h1>Shopping list for {this.props.name}</h1>
                <ul>
                    <li>Aaaa</li>
                    <li>Bbbb</li>
                </ul>
            </div>
        )
    }
}

// ===================

ReactDOM.render(
    <Demo name={"GGGG"}/>,
    document.getElementById('root')
);
