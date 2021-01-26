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

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);