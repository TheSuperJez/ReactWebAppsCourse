import React, { PropTypes } from 'react';
import { eliminarCandidato, saveCandidate } from '../modules/candidateModule';

import { connect } from 'react-redux';

/**
* Componente Contenedor para la sección de candidatos
*
* @class CandidateContainer
* @constructor
*/
class CandidateContainer extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.getYears = this.getYears.bind(this);
		this.eliminarCandidato = this.eliminarCandidato.bind(this);
	}
	/**
	* Método que calcula la edad a partir de una fecha en timestamp
	*
	* @method getYears
	* @param {Number} timestamp
	*/
	getYears(timestamp) {
		return Math.abs(new Date(new Date(timestamp) - new Date()).getUTCFullYear() - 1970) - 1;
	}

	eliminarCandidato(event) {
		let index = event.target.attributes['data-index'].nodeValue;
		this.props.eliminarCandidato(index);
	}

	render() {
		let components = this.props.children && React.cloneElement(this.props.children, {
			saveCandidate: this.props.saveCandidate,
			candidatesList: this.props.candidatesList,
			getYears: this.getYears,
			eliminarCandidato: this.eliminarCandidato

		});
		return (
			<div>
				{components}
			</div>
		);
	}
}

CandidateContainer.propTypes = {
	children: PropTypes.object,
	saveCandidate: PropTypes.func,
	candidatesList: PropTypes.object,
	eliminarCandidato: PropTypes.fun
};

function mapStateToProps(state) {
	return {
		candidatesList: state.candidateModule.get('candidatesList')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		saveCandidate: (candidate) => dispatch(saveCandidate(candidate)),
		eliminarCandidato: (index) => dispatch(eliminarCandidato(index))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateContainer);
