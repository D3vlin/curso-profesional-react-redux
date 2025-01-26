import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, compose, legacy_createStore } from 'redux';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { featuring, logger } from './middlewares';
import { thunk } from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhacers = composeAlt(applyMiddleware(thunk, logger, featuring))
const store = legacy_createStore(pokemonsReducer, composedEnhacers)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
