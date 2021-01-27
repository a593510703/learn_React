import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (<ListItem item={item} key={item.id} />))}
    </dl>
  );
}

ReactDOM.render(
  <Glossary />,
  document.getElementById('root'),
);