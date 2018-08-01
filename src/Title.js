import React, { Component } from 'react';
import './Title.css';
class Title extends Component {
  render() {
    return (
      <div className="col align-self-center" id="movie">
        <img src={this.props.image} alt="" />
        <h6>{this.props.title}</h6>
      </div>
    );
  }
}
export default Title;
