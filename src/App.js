import React, { Component } from 'react';
import './App.css';
import Up from './components/Up/index.js';
import Down from './components/Down/index.js';
import Reset from './components/Reset/index.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

    const MainMenu = () => {
      return (
        <div>
          <Link to="/up">
            <button>Up</button>
          </Link>
          <Link to="/down">
            <button>Down</button>
          </Link>
          <Link to="/reset">
            <button>Reset</button>
          </Link>
        </div>
      );
    };


  class App extends Component {

    state = {
      counterTime: localStorage.getItem('counter'),
      major: true
    }

    increment = () => {
      localStorage.setItem('counter', parseInt(localStorage.getItem('counter'))+1);
      this.setState({
        counterTime: localStorage.getItem('counter')
      });
    }

    decrement = () => {
      localStorage.setItem('counter', parseInt(localStorage.getItem('counter'))-1);
      this.setState({
        counterTime: localStorage.getItem('counter')
      });
    }


  isMajor = (day, month, year) => {
    return new Date(year+18, month-1, day) <= new Date();
  }
  
  dateInputValue = () => {  
    
      let input = document.getElementById("dateInput").value;
      let dateEntered = new Date(input);
      let year= dateEntered.getFullYear();
      let month = dateEntered.getMonth()+1;
      let day = dateEntered.getUTCDate();
      
      this.setState({
         major: this.isMajor(day, month, year)
      }) 
      
      this.reset();
      console.log(this.state.major)
  }

  // OU PLACER LA METHODE POUR ARRIVER AVANT LE CLICK 

  reset = () => {
    if(this.state.major === false ) {
      localStorage.setItem('counter', 0);
      this.setState({
        counterTime: localStorage.getItem('counter')
      });
    } 
  }
        
    componentDidMount(){
      if (!localStorage.getItem('counter')) {
        localStorage.setItem('counter', 0)
      }
    }

    render() {
      
      return (
        <Router>
          <div className="App">
            <header 
              style={{
                backgroundColor:
                  `${localStorage.getItem('counter') >= 10 ? 
                  '#e74c3c' : localStorage.getItem('counter') <= -10 ? 
                  '#27ae60' : '#282c34'}`
              }} 
                className={`App-header ${localStorage.getItem('counter') >= 10 ? 'background-red' : ''}`
            }>
              <MainMenu/>
              <div>
                <Route exact path="/up" component={() => <Up clickMore={this.increment} counter={this.state.counterTime}/>}/>
                <Route exact path="/down" component={() => <Down clickMore={this.decrement} counter={this.state.counterTime}/>} />
                <Route exact path="/reset" component={() => <Reset inputId={'dateInput'} resetCounter={this.dateInputValue} counter={this.state.counterTime}/>} />
              </div>
            </header>
          </div>
        </Router>
      );
    }
  }

  export default App;