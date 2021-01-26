import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    alert('提交的名字：' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字：
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='提交' />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root'),
);