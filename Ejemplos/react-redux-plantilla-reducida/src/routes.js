import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import CandidateContainer from './containers/CandidateContainer';
import CandidateForm from './components/candidate/CandidateForm';
import CandidateList from './components/candidate/CandidateList';
import React from 'react';

export default (
	<Route path="/" component={App}> 
		<Route path="candidate" component={CandidateContainer}>
			<IndexRoute component={CandidateList} />
			<Route path="new" component={CandidateForm} />
		</Route>
	</Route>
);
