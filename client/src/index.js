import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App/App';
import reducers from './reducers';

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk) );

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);

//console.log('Environment is ', process.env.NODE_ENV);
//console.log('Stripe key is ', process.env.REACT_APP_STRIPE_KEY);

//registerServiceWorker();
