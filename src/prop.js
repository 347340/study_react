import React from 'react'
import ReactDOM from 'react-dom';

function HelloMessage(props) {
  return <h3>学习 {props.name}!</h3>;
}

const element = <HelloMessage name="React" />

ReactDOM.render(element, document.getElementById('root'));
export default HelloMessage;
