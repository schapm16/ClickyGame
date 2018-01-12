import React from 'react';
import Picture from './picture.js';

const Row = (props) => 
  <div className='row'>
      {props.pictures.map((picture) => {
        return (
        <div className="col-xs-4">
          <div className="imageWrapper">
            <Picture key={picture.id} imageId={picture.id} imageURL={picture.imageURL} keepPlaying={props.keepPlaying}/>
          </div>
        </div>
        );
      })}
  </div>


export default Row;