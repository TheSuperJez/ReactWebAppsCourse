import React, {PropTypes} from 'react';

const CandidateTableRow = ({nombre, apePaterno, apeMaterno, fechaNacimiento, getYears,
	index, eliminarCandidato}) => {
	let time = parseInt((new Date(fechaNacimiento).getTime()));
	return ( 
		<tr>
			<td>
				{nombre}
			</td>
			<td>
				{apePaterno}
			</td> 
			<td>
				{apeMaterno}
			</td> 
			<td>
				{getYears(time)}
			</td>
			<td>
				<button data-index={index} onClick={eliminarCandidato}>{'Eliminar'}</button>
			</td>
		</tr>
	);

};
 
CandidateTableRow.propTypes = {
	nombre: PropTypes.string.isRequired,
	apePaterno: PropTypes.string.isRequired,
	apeMaterno: PropTypes.string.isRequired,
	fechaNacimiento: PropTypes.string.isRequired,
	getYears: PropTypes.func.isRequired,
	index: PropTypes.number,
	eliminarCandidato: PropTypes.func
};

export default CandidateTableRow;
