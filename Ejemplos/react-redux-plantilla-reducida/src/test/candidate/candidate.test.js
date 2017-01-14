import * as candidateModule from '../../modules/candidateModule';

import {expect} from 'chai';
import initialState from '../../modules/initialState';

describe('Reducer de questions', () => {
	it('LOAD_CANDIDATE_LIST:' +
		' Debe devolver una lista de candidatos.', () => {
		let test = {
			type: candidateModule.LOAD_CANDIDATE_LIST
		};
		let testState = candidateModule.reducer(initialState.candidateModule, test);
		expect(testState.get('candidateList')).to.be.an('array');
	});
});
