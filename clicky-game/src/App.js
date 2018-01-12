import React from 'react';
import Grid from './components/grid.js';

class App extends React.Component {
  
  state = {
   keepPlaying: true
  }
  
  decision() {
    
  } 
  
  render() {
    return <Grid decision={this.decision} keepPlaying = {this.state.keepPlaying}/>;
  }
}

export default App;
