import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user)
    return <h1>Hello, { formatName(user) }</h1>;
  return <h1>Hello, Stranger.</h1>
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  tick() {
    this.setState({date: new Date()});
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root'),
);