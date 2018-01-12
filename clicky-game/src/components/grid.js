import React from 'react';
import Picture from './picture.js'
import pictures from '../pictures.json'

class Grid extends React.Component {
    
    
    render() {
        
      <div className='container'>
        <div className='row'>
          <div className='col-xs-4'><Picture/></div>
          
          <div className='col-xs-4'><Picture/></div>
          
          <div className='col-xs-4'><Picture/></div>
          
          <div className='col-xs-4'><Picture/></div>
        </div>
        
        <div className='row'>
          <div className='col-xs-4'><Picture/></div>>
          
          <div className='col-xs-4'><Picture/></div>
          
          <div className='col-xs-4'><Picture/></div>
          
          <div className='col-xs-4'><Picture/></div>
        </div>
        
        <div className='row'>
          <div className='col-xs-4'><Picture/></div>
          
          <div className='col-xs-4'><Picture/></div>
          
          <div className='col-xs-4'><Picture/></div>
          
          <div className='col-xs-4'><Picture/></div>
        </div>
      </div>
        
    }
    
}