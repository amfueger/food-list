import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

class RecipeResults extends Component {
	construtor() {
		super();
		this.state = {
			randomRecipes: []
		}
	}
getResults = (query) => {
	const result = await fetch('/recipe/search');
	const resultJson = await result.json();
	if(result.status !== 200) {
		console.log(result, "Error in getting result");
	}
}
componentDidMount(){
	this.getResults()
	.then(randomRecipes => this.setState({
		randomRecipes: randomRecipes.data
	})).catch((err) => {
		console.log(err, "error in componentDidMount RecipeResults, List");
	})
}
	render(){
		const recipes = this.state.results.map((recipe, i) => {
			return(
				<Card key={i}>
					<CardImg top width="100%" src={this.recipe.recipes.image} />
					<CardBody>
						<CardTitle>{this.recipe.recipes.title}</CardTitle>
						<CardText>{this.recipe.recipes.servings}</CardText>
					</CardBody>
				</Card>
				)
		})
		return(
				<div>{recipes}</div>
			)
	}
}


export default RecipeResults;