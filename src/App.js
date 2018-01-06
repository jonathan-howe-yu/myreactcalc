import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.buttonClicked = this.buttonClicked.bind(this);
    this.numberPressed = this.numberPressed.bind(this);
    this.evalPrevious = this.evalPrevious.bind(this);
  }

  state = {
    currentValue: 0,
    total: 0,
    currentOperator: null,
    showTotal: false
  }

  buttonClicked(buttonInput) {
    if (buttonInput === '+' ||
        buttonInput === '-' ||
        buttonInput === '/' ||
        buttonInput === '*' ||
        buttonInput === '=') {
      this.evalPrevious();
      this.setState({currentValue: 0, currentOperator: buttonInput, showTotal: true});
    }
    else {
      this.numberPressed(buttonInput);
    }
  }

  numberPressed(number) {
    this.setState(prevState => ({currentValue: prevState.currentValue * 10 + number, showTotal: false}));
  }

  evalPrevious() {
    if (this.state.currentOperator === '+') {
      this.setState(prevState => ({total: prevState.total + prevState.currentValue}));
    }
    else if (this.state.currentOperator === '-') {
      this.setState(prevState => ({total: prevState.total - prevState.currentValue}));
    }
    else if (this.state.currentOperator === '*') {
      this.setState(prevState => ({total: prevState.total * prevState.currentValue}));
    }
    else if (this.state.currentOperator === '/') {
      this.setState(prevState => ({total: prevState.total / prevState.currentValue}));
    }
    else {
      this.setState(prevState => ({total: prevState.currentValue}));
    }
  }

  render() {
    return (
      <div className="calculator">
        <div id="output-display">{ this.state.showTotal ? this.state.total : this.state.currentValue }</div>
        <button className="calculator-button number-input" id="button-0" onClick={() => this.buttonClicked(0)}>0</button>
        <button className="calculator-button number-input" id="button-1" onClick={() => this.buttonClicked(1)}>1</button>
        <button className="calculator-button number-input" id="button-2" onClick={() => this.buttonClicked(2)}>2</button>
        <button className="calculator-button number-input" id="button-3" onClick={() => this.buttonClicked(3)}>3</button>
        <button className="calculator-button number-input" id="button-4" onClick={() => this.buttonClicked(4)}>4</button>
        <button className="calculator-button number-input" id="button-5" onClick={() => this.buttonClicked(5)}>5</button>
        <button className="calculator-button number-input" id="button-6" onClick={() => this.buttonClicked(6)}>6</button>
        <button className="calculator-button number-input" id="button-7" onClick={() => this.buttonClicked(7)}>7</button>
        <button className="calculator-button number-input" id="button-8" onClick={() => this.buttonClicked(8)}>8</button>
        <button className="calculator-button number-input" id="button-9" onClick={() => this.buttonClicked(9)}>9</button>
        <button className="calculator-button operator-input" id="button-add" onClick={() => this.buttonClicked('+')}>+</button>
        <button className="calculator-button operator-input" id="button-subtract" onClick={() => this.buttonClicked('-')}>-</button>
        <button className="calculator-button operator-input" id="button-multiply" onClick={() => this.buttonClicked('*')}>*</button>
        <button className="calculator-button operator-input" id="button-divide" onClick={() => this.buttonClicked('/')}>/</button>
        <button className="calculator-button operator-input" id="button-equals" onClick={() => this.buttonClicked('=')}>=</button>        
      </div>
    );
  }
}

export default App;
