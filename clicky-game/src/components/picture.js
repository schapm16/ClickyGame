import React from 'react';

const Picture = (props) => 
  
  <img id={props.picture.id} src={props.picture.imageURL} alt={props.picture.name} />
  

export default Picture;
