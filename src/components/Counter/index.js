import React, { Component } from 'react';
import './index.css';



class Counter extends Component {
    render() {
        return (
            <div>
                <p className="counter">{this.props.counter}</p>
            </div>
        );
    }
}

export default Counter;