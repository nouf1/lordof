import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Movie from './Movie.js';
import Hours from './Hours';
import Minutes from './Minutes';

class App extends Component {
  render() {
    
    const allMovies = [
      <Movie name={this.props.movies[0].name} hours={this.props.movies[0].hours} minutes={this.props.movies[0].minutes}/>,
      <Movie name={this.props.movies[1].name} hours={this.props.movies[1].hours} minutes={this.props.movies[1].minutes}/>,
      <Movie name={this.props.movies[2].name} hours={this.props.movies[2].hours} minutes={this.props.movies[2].minutes}/>,
     
      ];
     

      return (
      <div>
        {allMovies}
      </div>
    );
  }
}

export default App;