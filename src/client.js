import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from "./components/App";
import reducers from './reducers';

const store = createStore(reducers, { ...window.APP_STATE });

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
