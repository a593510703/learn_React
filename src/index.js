import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Test(props) {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
    </div>
  );
}

ReactDOM.render(
  <Test isLoggedIn={true} />,
  document.getElementById('root'),
)