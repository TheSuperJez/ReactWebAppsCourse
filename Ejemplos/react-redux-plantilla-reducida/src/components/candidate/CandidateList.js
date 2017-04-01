import React, {PropTypes} from 'react';

import CandidateRow from './CandidateTableRow';
import {Table} from 'react-bootstrap';

/**
* Componente que muestra la lista de candidatos
*
* @class CandidateList
*/
const CandidateList = ({candidatesList, getYears, eliminarCandidato}) => {
	let candidate = candidatesList.map((element, index) => {
		let propiedades = element;
		propiedades.getYears = getYears;
		propiedades.eliminarCandidato = eliminarCandidato;
		propiedades.index = index;
		return (
			<CandidateRow key={index} {...propiedades} />
		); 
	}); 
	
	return ( 
		<Table striped bordered condensed hover>
			<thead>
				<tr>
					<th>{'Nombre'}</th>
					<th>{'Ape paterno'}</th>
					<th>{'Ape materno'}</th>
					<th>{'Edad'}</th>
					<th>{'Eliminar'}</th>
				</tr>
			</thead>
			<tbody>
				{candidate}
			</tbody>	
		</Table>
	);
};

CandidateList.propTypes = {
	candidatesList: PropTypes.array,
	getYears: PropTypes.func,
	eliminarCandidato: PropTypes.func
};

export default CandidateList;
