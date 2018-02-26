import React, {Component} from 'react';
import ToggleButton from 'react-toggle-button'

class ControlToggle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.value
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({ value: newProps.value });
	}

	shouldComponentUpdate(newProps) {
		return newProps.value !== this.state.value;
	}

	handler = (value) => {
		this.setState({ value: !value });
		this.props.handler(!value);
	};

	renderOnOff = () => {
		return (
			<ToggleButton
				inactiveLabel={<X/>}
				activeLabel={<Check/>}
				value={ this.state.value }
				onToggle={ this.handler }
				colors={{
					active: {
						base: '#2a57ab'//'#365ba5'
					}
				}}
			/>
		)
	};

	render() {
		console.log("Toggle render called");
		return(
			<div id="toggle" className="flexDefault">
				<h4>{this.props.label}</h4>
				{this.renderOnOff()}
				{/*TODO: options to render different types of toggle controls*/}
			</div>
		);
	}
}

class Check extends Component {
	check = "\u2714";
	render() {
		return <div className="veryBold">{this.check}</div>
	}
}

class X extends Component {
	x = "X";
	render() {
		return <div className="veryBold">{this.x}</div>
	}
}

export default ControlToggle;
