import React, { Component } from 'react';
import './index.css';


import Counter from '.././Counter/index.js';


class Up extends Component {


    render() {
        return (
            <div className="up-wrapper">
                <Counter counter={this.props.counter}/>
                <button onClick={this.props.clickMore} className="up">+</button>
            </div>
        );
    }
}

export default Up;