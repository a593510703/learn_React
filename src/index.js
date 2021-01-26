import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BoilingVerdict(props) {
  if (props.celsius >= 100)
    return <p>The water would boil.</p>;
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
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
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root'),
);