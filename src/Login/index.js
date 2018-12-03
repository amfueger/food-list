import React, { Component } from 'react';
import { Form, Button, Label } from 'react-bootstrap';

class Login extends Component{
constructor(){
	super();

	this.state={
		username: '',
		email: '',
		password: ''
	}
}
handleChange = (e) => {
	this.setState({
		[e.currentTarget.name]: e.currentTarget.value
	})
}
handleSubmit = async (e) => {
	e.preventDefault();
	
	const loginResponse = await fetch('http://localhost:4000/auth', {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(this.state),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const parsedResponse = await loginResponse.json();

	if(parsedResponse.data === 'login successful'){
		console.log('success login');
		this.props.history.push('/list');
	}
}
render(){
	return(
			<Form onSubmit={this.handleSubmit}>
				<Label> Username: </Label>
				<Form.Input type='text' name='username' onChange={this.handleChange} />
				<Label> Email: </Label>
				<Form.Input type='text' name='email' onChange={this.handleChange} />
				<Label> Password: </Label>
				<Form.Input type='text' name='password' onChange={this.handleChange} />
				<Button type='Submit' color='blue'>Login</Button>
			</Form>
		)
}

}

export default Login;