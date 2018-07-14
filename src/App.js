import React, { Component } from 'react';
//import logo from './logo.svg';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      project: [{
        title: 'Business Website',
        category: 'Web Design'
      },{
        title: 'Social App',
        category: 'Mobile Development'
      },{
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }]
    }
  }

  render() {
    return (
      <div className="App">
          My App
        <Projects projects = {this.state.project} />
      </div>
    );
  }
}

export default App;
