import React, {PropTypes} from 'react';
import {FormControl, FormGroup, ControlLabel, Col, Button, Row} from 'react-bootstrap';

class CandidateForm extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			edad: 0, 
			dataCandidato: {}
		};
		this.changeEdad = this.changeEdad.bind(this);
		this.changeDataCandidato = this.changeDataCandidato.bind(this);
		this.saveCandidate = this.saveCandidate.bind(this);

	} 
	changeEdad(e) {
		let fecha = e.target.value;
		let time = parseInt((new Date(fecha).getTime()));
		this.setState({
			dataCandidato: Object.assign(this.state.dataCandidato, { 'fechaNacimiento': fecha }),
			edad: this.props.getYears(time)
		});
	}

	changeDataCandidato(event) {
		let name = event.target.name,
			value = event.target.value;
		let data = { [name]: value };
		this.setState({
			dataCandidato: Object.assign(this.state.dataCandidato, data)
		});
	}

	saveCandidate(event) {
		event.preventDefault();
		let dataCandidato = this.state.dataCandidato;
		this.props.saveCandidate(dataCandidato);
		document.location = '#/candidate';
	}

	render() { 
		return (
			<form onSubmit={this.saveCandidate}>
				<Row>
					<Col xs={8}>
						<FormGroup>
							<ControlLabel>{'Formulario Candidato'}</ControlLabel>
							<Row>
								<Col md={2}>
									<ControlLabel>{'Nombre: '}</ControlLabel>
								</Col>
								<Col md={5}>
									<FormControl type="text" name="nombre"
										onChange={this.changeDataCandidato}
										value={this.state.questionText} />
								</Col>
							</Row>
							<Row>
								<Col md={2}>
									<ControlLabel>{'Ape. paterno: '}</ControlLabel>
								</Col>
								<Col md={5}>
									<FormControl type="text" name="apePaterno"
										onChange={this.changeDataCandidato}
										value={this.state.questionText} />
								</Col>
							</Row>
							<Row>
								<Col md={2}>
									<ControlLabel>{'Ape. materno: '}</ControlLabel>
								</Col>
								<Col md={5}>
									<FormControl type="text" name="apeMaterno"
										onChange={this.changeDataCandidato}
										value={this.state.questionText} />
								</Col>
							</Row>
							<Row>
								<Col md={2}>
									<ControlLabel>{'Fecha de Nacimiento: '}</ControlLabel>
								</Col>
								<Col md={5}>
									<FormControl type="date" bsSize="small" onChange={this.changeEdad}
										value={this.state.dataCandidato.fechaNacimiento}
										/>
								</Col>
							</Row>
							<Row>
								<Col md={2}>
									<ControlLabel>{'Edad: '}</ControlLabel>
								</Col>
								<Col md={5}>
									<FormControl type="text" bsSize="small" disabled
										value={this.state.edad} />
								</Col>
							</Row>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col xs={8}>
						&nbsp;
					</Col>
					<Col xs={4}>
						<Button type="submit" >
							{'Guardar candidato'}
						</Button>
					</Col>
				</Row>
			</form>
		);
	}
}
 
CandidateForm.propTypes = { 
	getYears: PropTypes.func,
	saveCandidate: PropTypes.func 
};

export default CandidateForm;
