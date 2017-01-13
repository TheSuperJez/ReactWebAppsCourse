import Immutable from 'immutable';

export const Candidate = new Immutable.Record({
	objectId: undefined, 
	nombre: '',
	apePaterno: '',
	apeMaterno: '',
	fechaNacimiento: '' 
});
