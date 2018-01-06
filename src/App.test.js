import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  
  it('renders 10 number buttons', () => {
    const app = shallow(<App />);
    expect(app.find('.number-input')).to.have.length(10);
  });
  
  it('renders 5 operator buttons', () => {
    const app = shallow(<App />);
    expect(app.find('.operator-input')).to.have.length(5);
  });

  // Separated out since I plan on making display its own component
  const isDisplayShowing = (app, value) => {
    expect(app.find('#output-display').text()).to.equal(value.toString());
  }

  /* Number button tests */
  const numberInputTest = num => {
    it(`renders only one ${num} button`), () => {
      const app = shallow(<App />);
      expect(app.find(`#button-${num}`)).to.have.length(1);
    };

    it(`renders ${num} when ${num} button is pressed`, () => {
      const app = shallow(<App />);
      app.find(`#button-${num}`).simulate('click');
      isDisplayShowing(app, num);
    });
  };

  numberInputTest(0);
  numberInputTest(1);
  numberInputTest(2);
  numberInputTest(3);
  numberInputTest(4);
  numberInputTest(5);
  numberInputTest(6);
  numberInputTest(7);
  numberInputTest(8);
  numberInputTest(9);
  
});

