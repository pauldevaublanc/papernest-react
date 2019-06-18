import React, { Component } from 'react';
import './index.css';

import Counter from '.././Counter/index.js';

class Reset extends Component {

    


    render() {
        return (
            <div className="reset">
                <Counter counter={this.props.counter}/>
                <input id={this.props.inputId} type="date"></input>
                <button onClick={this.props.resetCounter}>Reset</button>
            </div>
        );
    }
}

export default Reset;