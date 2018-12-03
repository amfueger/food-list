import React, { Component } from 'react';
import { Card } from 'reactstrap';

class RandomRecipes extends Component {
	constructor() {
		super()

		this.state = {
			results: []

		}
	}
getRandomRecipes = async () => {
		try {
		const recipes = await fetch('http://localhost:9000/recipe/random');
		const parsedResponse = await recipes.json()
		return parsedResponse;
		} catch(error){
			console.log(error);
		}
		
}
componentDidMount(){
	this.getRandomRecipes().then((recipes) => {
		this.setState({
			results: recipes.data
		}).catch((err) => {
			console.log(err);
		})
}

	render() {
		const results = this.state.results.map((recipe, i) => {
			return(
					
				)
		})
		return(
			<div>
		
			</div>
			)
	}
}

export default RandomRecipes;