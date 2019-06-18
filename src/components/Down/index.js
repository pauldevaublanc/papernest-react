import React, { Component } from 'react';
import './index.css';

import Counter from '.././Counter/index.js'


class Down extends Component {

    render() {
        return (
            <div>
                <Counter counter={this.props.counter}/>
                <button onClick={this.props.clickMore} className="down">-</button>
            </div>
        );
    }
}

export default Down;