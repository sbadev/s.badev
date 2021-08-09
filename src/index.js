import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import store from './redux/store';
// main
import App from '../src/components/App';
// styles
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
