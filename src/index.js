import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from '../data/reducer';
import App from './App.js'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)