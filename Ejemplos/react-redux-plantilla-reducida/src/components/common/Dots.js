import React, {PropTypes} from 'react';

class Dots extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		
		this.state = {
			frame: 1
		};
		
		this.updateDots = this.updateDots.bind(this);
	}
	
	componentDidMount() {
		this.interval = setInterval(this.updateDots, this.props.interval);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}
	
	updateDots() {
		this.setState({
			frame: this.state.frame + 1
		});
	}
	
	render() {
		let dots = this.state.frame % (this.props.dots + 1);
		let text = '';
		while (dots > 0) {
			text += '.';
			dots--;
		}
		return (
			<span {...this.props}>
				{text}&nbsp;
			</span>
		);
	}
}

Dots.propTypes = {
	dots: PropTypes.number,
	interval: PropTypes.number
};

Dots.defaultProps = {
	interval: 300, 
	dots: 3
};

export default Dots;
