import React, { Component } from 'react';
import RecipeSearch from './RecipeSearch';
import RecipeResults from './RecipeResults';
import TempIngredients from './TempIngredients';
import TempRecipes from './TempRecipes';
import AddIngredient from './AddIngredient';


class RecipeContainer extends Component {
	constructor() {
		super()

		this.state = {
			query: '',
			randomRecipes: [],
		}
	}

handleQuery = (query) => {
	this.setState({ 
		query: query
	})
}
addIngredient = async (ingredient, e) => {
	e.preventDefault();
		try {
		//What I want here, is for this info to not be stored in mongo, but in props, added to another container

		} catch(e){
			
		}
		
}
	render() {
		return(
			<div>
			<TempIngredients />
			<AddIngredient />
			<TempRecipes />
			<RecipeSearch handleQuery={this.handleQuery}/>
			<RecipeResults query={this.state.query} />
			</div>
			)
	}
}

export default RecipeContainer;