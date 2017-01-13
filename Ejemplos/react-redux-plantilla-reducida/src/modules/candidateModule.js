import initialState from './initialState';

const LOAD_CANDIDATE_LIST = 'LOAD_CANDIDATE_LIST';
const SAVE_CANDIDATE = 'SAVE_CANDIDATE';

export default function reducer(state = initialState.get('candidateModule'), action) {
	switch (action.type) {
	case LOAD_CANDIDATE_LIST: {
		return state;
	}
	case SAVE_CANDIDATE: {
		let candidates=state.get('candidatesList');
		candidates.push(action.question);
		return state.set('candidatesList', candidates);
	}
	default: return state;
	}
}

export const loadCandidates = () => {
	return (dispatch) => {
		dispatch({ type: LOAD_CANDIDATE_LIST });

	};
};

export const saveCandidate = (question) => {
	return (dispatch) => {
		dispatch({ type: SAVE_CANDIDATE, question });

	};
};
