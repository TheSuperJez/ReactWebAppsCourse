import React, {PropTypes} from 'react';

class App extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.toggleMenu=this.toggleMenu.bind(this);
		this.state = {
			isOpened: false
		};
	}
    
	toggleMenu(event) {
		event.preventDefault();
		this.setState({isOpened: !this.state.isOpened});
	}
    
	render() {
		let components = this.props.children;
		return (
			<div>
				<div className="wrapGeneral">
					{components}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired
};


export default App;
