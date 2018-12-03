import React, { Component } from 'react';
import { NavItem, NavBar } from 'reactstrap';

class Nav extends Component {

	render(){
		return(
			<NavBar>
				<NavBar.Header>
					<NavItem onClick={() => this.props.updatePageShowing("Main")}>
				    	Home
					</NavItem>
				</NavBar.Header>
				<NavItem onClick={() => this.props.updatePageShowing("Recipes")}>
			    	Recipes
				</NavItem>

				<NavItem onClick={() => this.props.updatePageShowing("Login")}>
					Login
				</NavItem>

				<NavItem onClick={() => this.props.updatePageShowing("Register")}>
					Register
				</NavItem>
			</NavBar>
		)
	}
}

export default Nav;