import React from 'react';
import Picture from './picture.js';

const Row = (props) => 
  <div className='row'>
      {props.pictures.map((picture) => {
        return (
        <div key={picture.id} className="col-xs-4">
          <div className="imageWrapper">
            <Picture picture={picture}/>
          </div>
        </div>
        );
      })}
  </div>


export default Row;