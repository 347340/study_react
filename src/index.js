import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { createStore } from 'redux'; // 如果不使用Redux，可以注释掉
// import { Provider } from 'react-redux'; // 如果不使用Redux，可以注释掉
// import rootReducer from './reducers'; // 如果不使用Redux，可以注释掉

import './index.css';
import App from './App';
import HelloMessage from './prop'; // 根据实际路径修改导入语句
import reportWebVitals from './reportWebVitals';

// const store = createStore(rootReducer); // 如果不使用Redux，可以注释掉

ReactDOM.render(
  // 如果不使用Redux，可以将Provider组件和store注释掉
  // <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/prop' element={<HelloMessage />} />
    </Routes>
  </BrowserRouter>
  // </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
