import React, { Component } from 'react';
import { NavItem, NavBar} from 'reactstrap';
import serverURL from '../serverURL.js';

class NavLogged extends Component {
	handleLogout = async () => {
	    try {
	      const logoutRequest = await fetch(serverURL + 'auth/logout', {
	        credentials: 'include'
	      });

	      const parsedResponse = await logoutRequest.json();

	      console.log(`parsedResponse from Logout: `, parsedResponse);

	      this.props.updatePageShowing('Login');

	    } catch(err){
	        console.log('Error: ', err);
	    }
  	}
	render(){
		return(
			<NavBar>
				<NavBar.Header>
					<NavItem onClick={() => this.props.updatePageShowing("CurrentList")}>
				    	Home
					</NavItem>
				</NavBar.Header>
				<NavItem onClick={() => this.props.updatePageShowing("Recipes")}>
			    	Recipes
				</NavItem>

				<NavItem onClick={() => this.props.updatePageShowing("Login")}>
					Past Lists
				</NavItem>

				<NavItem onClick={this.handleLogout}>
				</NavItem>
			</NavBar>
		)
	}
}

export default NavLogged;