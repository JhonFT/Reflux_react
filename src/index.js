require('./styles/App.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './routes/Home.jsx';
import Sign from './routes/Sign.jsx';

// Render the main component into the dom
const app = document.getElementById('app');
ReactDOM.render(
	<Router history={browserHistory} >
		<Route path="/" component={Home} />
		<Route path="sign" component={Sign} />
	</Router>
	, app);
