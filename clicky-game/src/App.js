import React from 'react';
import Grid from './components/grid.js';

class App extends React.Component {
  
  guessed = [];
  
  state = {
   keepPlaying: true,
   score: 0,
   topScore: 0
  }
  
  reset = () => {
    this.setState({
      score: 0,
      keepPlaying: false
    });
    
    this.guessed.splice(0);
  }
  
  incrementScore = (clicked) => {
    this.guessed.push(clicked.id);
    this.setState({
      keepPlaying: true,
      score: this.state.score + 1,
      topScore: ((this.state.score + 1) > (this.state.topScore)) ? (this.state.score + 1):(this.state.topScore)
    });
  }
  
  decision = (clicked) => {
    if (this.guessed.includes(clicked.id)) {
      this.reset();
    }
    else {
      this.incrementScore(clicked);
    }
  } 
  
  render() {
    return <Grid decision={this.decision} keepPlaying={this.state.keepPlaying}/>;
  }
}

export default App;
