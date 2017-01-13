import * as questionModule from '../../modules/questionModule';

import {expect} from 'chai';

import initialState from '../../modules/initialState';

describe('Reducer de questions', () => {
	it('LOAD_QUESTION_LIST_SUCCESS:' +
		' Debe devolver una lista de preguntas.', () => {
		let test = {
			type: questionModule.LOAD_QUESTION_LIST_SUCCESS,
			questionsList: []
		};
		let testState = questionModule.reducer(initialState.questionModule, test);
		expect(testState.get('questionsList')).to.be.an('array');
	});
});
