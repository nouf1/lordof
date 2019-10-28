import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div>
       <h1>{this.props.name}</h1>
       <p>{this.props.hours} {this.props.minutes}</p>
      
      </div>
    );
  }
}

export default Movie;