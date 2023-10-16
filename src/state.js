import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
      <h3>要做就做No.1</h3>
      <h4>目前时间是{this.state.date.toLocaleTimeString()}.</h4>
      </div>
    );
  }
}

export default Clock;
