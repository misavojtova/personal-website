import React from 'react';
import ReactDOM from 'react-dom';
import 'tailwind.css';
import App from 'App.js';
import { Provider } from 'react-redux/es/exports';
// import { reducers } from 'core/store';
import { createStore } from 'react-redux';

// const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
