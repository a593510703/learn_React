import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "coconut",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味：
          <select multiple={true} value={['B', 'C']}>
            <option value='grapefruit'>pty</option>
            <option value='lime'>lc</option>
            <option value='coconut'>yz</option>
            <option value='mango'>mg</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root'),
);