import React, {PropTypes} from 'react';

import {connect} from 'react-redux';
import {saveCandidate} from '../modules/candidateModule';

class CandidateContainer extends React.Component {

	constructor(props, context) {
		super(props, context); 

		this.getYears = this.getYears.bind(this);	
	} 

	getYears(timestamp) {
		return Math.abs(new Date(new Date(timestamp) - new Date()).getUTCFullYear() - 1970) - 1;
	}

	render() {
		let components = this.props.children && React.cloneElement(this.props.children, {
			saveCandidate: this.props.saveCandidate,
			candidatesList: this.props.candidatesList,
			getYears: this.getYears
			
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
	candidatesList: PropTypes.object
}; 

function mapStateToProps(state) {
	return {
		candidatesList: state.candidateModule.get('candidatesList')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		saveCandidate: (candidate) => dispatch(saveCandidate(candidate))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateContainer);
