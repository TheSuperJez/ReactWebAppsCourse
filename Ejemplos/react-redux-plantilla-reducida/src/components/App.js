import {Nav, NavItem, Navbar} from 'react-bootstrap';
import React, {PropTypes} from 'react';

import Dots from './common/Dots';
import {connect} from 'react-redux';
import {loadCandidates} from '../modules/candidateModule';

class App extends React.Component {

	constructor(props, context) {
		super(props, context);   
	}

	componentDidMount() {
		this.props.loadCandidates();
	}
    
	render() {
		return (
			<div>
				<Navbar inverse>
					<Navbar.Header>
						<Navbar.Brand>
						<a href="#/candidate">
							{'React-Bootstrap'}
						</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={2} href="#/candidate/new">
								{'New Candidate'}
							</NavItem> 
							
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div className="container-fluid">
					{this.props.loading === true && (
						<Dots />
					)}
					{this.props.children}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object,
	loading: PropTypes.bool,
	loadCandidates: PropTypes.func
};

function mapStateToProps(state) {
	return {
		loading: state.ajaxModule > 0,
		candidateList: state.candidateModule.get('candidateList')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loadCandidates: () => dispatch(loadCandidates())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
