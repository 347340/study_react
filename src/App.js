//import React, {Component} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import User from './User';
import Element from './Element';
import AboutPage from './AboutPage';
import './style.css';
import Name from './Name';
import Toggle from './Event';
import HelloWorld from './HelloWorld';
import Tick from './setInterval';
import UseJsx from './usejsx';
import Example from './Example';
import Count from './count';
import Conditional from './conditional';
import Style from './style';
import Clock from './state';
import Time from './timer';
import HelloMessage from './prop';

function MyButton() {
  return(
    <button>
      Good, Good, Good!
    </button>
  );
}

//class App extends Component {
function App() {
  //render() {
    return (
      <div>
        <h1>欢迎学习React</h1>
        <Element />
        <User />
        <MyButton />
        <AboutPage />
        <img className="avatar" src="https://i.imgur.com/yXOvdOSs.jpg" alt="Avatar" />
        <Name /><br/>
        <Toggle />
        <HelloWorld />
        <UseJsx />
        <Tick />
        <Example />
        <Count />
        <Conditional />
        <Style />
        <Clock />
        <Time />
        <HelloMessage />
      </div>
    );
  //}
}
export default App;
