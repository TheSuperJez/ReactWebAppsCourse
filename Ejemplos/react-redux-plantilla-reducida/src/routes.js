import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import CandidateForm from './components/candidate/CandidateForm';
import CandidateList from './components/candidate/CandidateList';
import CandidateModule from './containers/CandidateContainer';
import React from 'react';

export default (
	<Route path="/" component={App}> 
		<Route path="candidate" component={CandidateModule}>
			<IndexRoute component={CandidateList} />
			<Route path="new" component={CandidateForm} />
		</Route>
	</Route>
);
