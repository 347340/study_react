import React from 'react';

var myStyle = {
  fontSize: 16,
  color: 'green'
};

function Style() {
  return (
    /*注释……*/
    <>
    <p style = {myStyle}>纽约的时间比加州早三个小时，但加州并没有变慢。每个人都在自己的时区里有自己的进程，你也一样！</p>
    <p style = {{color: 'blue'}}> hello, world!</p>
    </>
  );
}

export default Style;
