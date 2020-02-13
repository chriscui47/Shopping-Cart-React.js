import React, { useState } from 'react';
import './App.css';
import wood from './assets/wood.jpg'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import cart from './assets/cart.png';
export class Drop extends React.Component{
  
  
  constructor(props){
    super(props);
    this.state={
        open:false
    }

    this.handleButtonClick=this.handleButtonClick.bind(this);
  }
  
  handleButtonClick = () =>{
    this.setState({open: this.state.open===true?false:true});
   }
   emptyList=()=>{
     
   }
render() {
 
  if(this.props.items){
    var itemsList =this.props.items.map(el => 
      <div class="d-flex flex-row bd-highlight mb-3">
          <div class="p-2 bd-highlight"><img src={wood} style={{width:'1rem'}}/></div>
        <div class="p-2 bd-highlight"><div style={{size:'1rem'}}>{el}</div></div>
      <div class="p-2 bd-highlight"><button class="btn btn-primary btn-sm" style={{padding:'1px'}}>Remove</button></div>
      </div>
      
      
        )
  }
  
  console.log(this.props.items)

  return (
    <div>
      <div className="dropdown">
        <button type="button" class="button" onClick={this.handleButtonClick}>
          <img src={cart} style={{width:'1rem'}}/>
        </button>
      </div>

      {this.state.open &&(
      <div className="button" style={{ position:"absolute"}}>
        <ul style={{fontSize:'15px'}}>
          {itemsList}          
        </ul>
        <div>
        <Button onClick={this.props.clearcart}>Clear Cart</Button>
        </div>
      </div>)}
    </div>
    
  );
}
}