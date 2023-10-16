//import React from 'react';
//function ActionLink() {
//  function handleClick(e) {
//    e.preventDefault();
//    console.log('链接被点击');
//  }
//  return (
//    <a herf="#" onClick={handleClick}>
//    点这里
//    </a>
//  );
//}
//export default ActionLink;
//function Toggle() {
//  constructor(props) {
//    super(props);
//    this.state = {isToggleOn: true};
//    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
//    this.handleClick = this.handleClick.bind(this);
//  }
//  handleClick() {
//    this.setState(prevState => ({
//      isToggleOn: !prevState.isToggleOn
//    }));
//  }
//  render() {
//    return (
//      <button onClick={this.handleClick}>
//        {this.state.isToggleOn? 'ON' : 'OFF'}
//      </button>
//    );
//  }
//}

//export default Toggle;
import React, { useState } from 'react';

function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = () => {
    setIsToggleOn(prevState => !prevState);
  };

  return (
    <button onClick={handleClick}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default Toggle;
