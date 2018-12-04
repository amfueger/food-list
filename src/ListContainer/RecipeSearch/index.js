import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class RecipeSearch extends Component {
	constructor() {
		super();

		this.state = {
			query: ''

		}
	}
handleInput = (e) => {
	this.setState({
		[e.currentTarget.name]: e.currentTarget.value
	})
}
handleSubmit = (e) => {
	e.preventDefault();
	this.props.handleQuery(this.state.query);
}
	render() {
		return(
			<Form onSubmit={this.handleSubmit}>
				<Form.Input type='text' name='query' value={this.state.query} onChange={this.handleInput} placeholder='Look up Recipe'/>
				<Button color='blue' size='large' type='Submit'>Search</Button>
			</Form>
			)
	}
}

export default RecipeSearch;