import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  state = {
    total: 0,
    currentOperator: null
  }

  buttonClicked(buttonInput) {
    if (buttonInput === '+' ||
        buttonInput === '-' ||
        buttonInput === '/' ||
        buttonInput === '*' ||
        buttonInput === '=' ||
        buttonInput === '!') {
          this.setState({currentOperator: buttonInput});
    }
    else {
      if (this.state.currentOperator === '+') {
        this.setState(prevState => ({total: prevState.total + buttonInput}));
      }
      else if (this.state.currentOperator === '-') {
        this.setState(prevState => ({total: prevState.total - buttonInput}));
      }
      else if (this.state.currentOperator === '/') {
        this.setState(prevState => ({total: prevState.total / buttonInput}));
      }
      else if (this.state.currentOperator === '*') {
        this.setState(prevState => ({total: prevState.total * buttonInput}));
      }
      else {
        this.setState({total: buttonInput});
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div id="outputDisplay">{this.state.total}</div>
        <button onClick={() => this.buttonClicked(0)}>0</button>
        <button onClick={() => this.buttonClicked(1)}>1</button>
        <button onClick={() => this.buttonClicked(2)}>2</button>
        <button onClick={() => this.buttonClicked(3)}>3</button>
        <button onClick={() => this.buttonClicked(4)}>4</button>
        <button onClick={() => this.buttonClicked(5)}>5</button>
        <button onClick={() => this.buttonClicked(6)}>6</button>
        <button onClick={() => this.buttonClicked(7)}>7</button>
        <button onClick={() => this.buttonClicked(8)}>8</button>
        <button onClick={() => this.buttonClicked(9)}>9</button>
        <button onClick={() => this.buttonClicked('+')}>+</button>    
      </div>
    );
  }
}

export default App;
