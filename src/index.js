import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Toggle extends React.Component {
  handleClick() {
    console.log('this is: ', this);
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root'),
);