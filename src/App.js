import React, { Component } from 'react';
import './App.css';

/****Components****/
// import Nav from './Nav';
// import NavLogged from './NavLogged';
import RecipeContainer from './RecipeContainer';
//Login-Register
import Login from './Login';

//Server access
import serverURL from './serverURL.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      componentShowing: 'Login',
      logged: false,
      username: '',
      email: '',

    }
  }
  render() {
    return (
      <div className="App">
      <RecipeContainer />
      </div>
    );
  }
}

export default App;
