import Immutable from 'immutable';

let initialState = new Immutable.Map()
.set('candidateModule',
	new Immutable.Map().set('candidatesList', [])
);

export default initialState;
