import React from 'react';
import Row from './row.js';

import pictures from '../pictures.json';

class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    pictures: pictures
    };
  }
  
  render() {
    return(
      <div className='container'>
        <Row pictures = {this.state.pictures.slice(0,3)}/>
        <Row pictures = {this.state.pictures.slice(3,6)}/>
        <Row pictures = {this.state.pictures.slice(6)}/>
      </div>
    );
  }
}

export default Grid;