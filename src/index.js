import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  amount: 0
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'AMOUNT':
      return { ...state, amount: state.amount + 1 }
    default: return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider >,
  document.getElementById('root')
);

reportWebVitals();
