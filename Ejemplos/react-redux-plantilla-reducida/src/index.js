import '../less/main.less';
import _ from 'underscore';

import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import {Provider} from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

window._ = _;

const store = configureStore();

render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);
