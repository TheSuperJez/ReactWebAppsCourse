import {Nav, NavItem, Navbar} from 'react-bootstrap';
import React, {PropTypes} from 'react';

class App extends React.Component {

	constructor(props, context) {
		super(props, context);   
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

export default App;
