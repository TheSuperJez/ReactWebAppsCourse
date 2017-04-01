import initialState from './initialState';
//Actions types
export const LOAD_CANDIDATE_LIST = 'LOAD_CANDIDATE_LIST';
export const SAVE_CANDIDATE = 'SAVE_CANDIDATE';
export const DELETE_CANDIDATE = 'DELETE_CANDIDATE';
//Reducer
export default function reducer(state = initialState.get('candidateModule'), action) {
	switch (action.type) {
		case LOAD_CANDIDATE_LIST:
			{
				return state;
			}
		case SAVE_CANDIDATE:
			{
				let candidates = state.get('candidatesList');
				candidates.push(action.question);
				return state.set('candidatesList', candidates);
			}
		case DELETE_CANDIDATE:
			{
				let candidates = Object.assign([], state.get('candidatesList'));
				candidates.splice(action.index, 1);
				return state.set('candidatesList', candidates);
			}
		default:
			return state;
	}
}
/**
 * Función que carga la lista de candidatos.
 * Dispara: LOAD_CANDIDATE_LIST
 *
 * @method loadCandidates
 */
export const loadCandidates = () => {
	return (dispatch) => {
		dispatch({
			type: LOAD_CANDIDATE_LIST
		});

	};
};
/**
 * Función que agrega un candidato a la lista de candidatos.
 * Dispara: SAVE_CANDIDATE
 *
 * @method saveCandidate
 * @param {Object} question, objeto del candidato a agregar
 */
export const saveCandidate = (question) => {
	return (dispatch) => {
		dispatch({
			type: SAVE_CANDIDATE,
			question
		});

	};
};

/**
 * Función que agrega un candidato a la lista de candidatos.
 * Dispara: DELETE_CANDIDATE
 *
 * @method eliminarCandidato
 * @param {Number} index, indice del candidato a eliminar.
 */
export const eliminarCandidato = (index) => {
	return (dispatch) => {
		dispatch({
			type: DELETE_CANDIDATE,
			index
		});

	};
};
