import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
  <Router>
    <Main />
  </Router>
</Provider>
);
