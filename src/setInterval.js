//import React from 'react';
//function Tick() {
//  const element = (
//    <div>
//      <h1>嘿嘿嘿石凯！</h1>
//      <h2>现在是{new Date().toLocaleTimeString()}.</h2>
//    </div>
//  );
//  return element;
//}
//setInterval(Tick, 1);
//export default Tick;
import React from 'react';

function Tick() {
  const nowTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h3>嘿嘿嘿石凯！</h3>
      <h2>现在是{nowTime}.</h2>
    </div>
  );
}

export default Tick;
