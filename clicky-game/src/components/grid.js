import React from 'react';
import Row from './row.js';

import pictures from '../pictures.json';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    pictures: pictures
    };
  }
  
  keepPlaying = () => {
    if (this.props.keepPlaying) {
      let pictures = this.state.pictures;
      let picturesTotalLength = pictures.length;
      let newPictures = [];
      let randomIndex;
      
      for (let i = 0; i < picturesTotalLength; i++) {
        randomIndex = Math.floor(Math.random()*(pictures.length));
        newPictures.push(pictures[randomIndex]);
        pictures.splice(randomIndex, 1);
      }
      
      this.setState({pictures: newPictures});
    }
  }
  
  componentWillReceiveProps() {
    this.keepPlaying();
  }
  
  render() {
    return(
      <div className='container' onClick={(event) => this.props.decision(event.target)}>
        <Row pictures={this.state.pictures.slice(0,3)} />
        <Row pictures={this.state.pictures.slice(3,6)} />
        <Row pictures={this.state.pictures.slice(6)} />
      </div>
    );
  }
}

export default Grid;