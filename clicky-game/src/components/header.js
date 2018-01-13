import React from 'react';

const Header = (props) => {
  return (
    <div id='header'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <p id='title'>StarWars Clicky!</p>
          </div>
          <div className='col-md-4'>
            <p id='message'></p>
          </div>
          <div className='col-md-4'>
            <p id='scores'>{`Your Score: ${props.score} Top Score: ${props.topScore}`}</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;