import React from 'react';

const Picture = (props) => 
  
  <img id={props.id} src={props.imageURL} onClick={() => props.keepPlaying()}/>
  

export default Picture;
