import React from 'react';
import ReactDOM from 'react-dom';
import 'tailwind.css';
import App from 'App.js';
import { Provider } from 'react-redux';
import store from 'core/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
