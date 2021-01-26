import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

function BoilingVerdict(props) {
  if (props.celsius >= 100)
    return <p>The water would boil.</p>;
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {template: ''};
  }

  handleChange(e) {
    this.setState({template: e.target.value});
  }

  render() {
    const temperature = this.state.template;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root'),
);