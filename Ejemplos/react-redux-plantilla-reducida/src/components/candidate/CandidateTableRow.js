import React, {PropTypes} from 'react';

const CandidateTableRow = ({nombre, apePaterno, apeMaterno, fechaNacimiento, getYears}) => {
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
		</tr>
	);

};
 
CandidateTableRow.propTypes = {
	nombre: PropTypes.string.isRequired,
	apePaterno: PropTypes.string.isRequired,
	apeMaterno: PropTypes.string.isRequired,
	fechaNacimiento: PropTypes.string.isRequired,
	getYears: PropTypes.func.isRequired 
};

export default CandidateTableRow;
