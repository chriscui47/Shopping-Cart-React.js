import React, {useState} from 'react';
import './App.css';
import {Drop} from './Drop';
import { Button } from 'react-bootstrap';
import {Cardc} from './Cardc';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import wood from './assets/wood.jpg'
import metal from './assets/metal.jpg'
import iron from './assets/iron.jpeg'
import {Formc} from './Formc';

export function App() {
  let [items,setitems]=useState([]);
  let addItem=(e)=>{
  //pushing new item to hook
    setitems(prevArray => [...prevArray, e]);
  }
  let clearcart=()=>{
    setitems(prevArray=>[]);
  }
  let removeitem=(e)=>{
    setitems(items.filter(item => item !== e));
    alert("helolo");
  }
  return (
    <div >
      <Drop style={{align:'left', width:'10rem'}} items={items} clearcart={clearcart}/> 
      <Container >
      <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><Cardc img={wood} item="wood" onClick={()=>addItem("wood")}> 4x4 FRESH wood. 1.99$/KG</Cardc></div>
  <div class="p-2 bd-highlight"><Cardc img={metal} item="metal" onClick={()=>addItem("metal")}>Pure metal. 9.99$/KG</Cardc></div>
  <div class="p-2 bd-highlight"><Cardc img={iron} item="iron" onClick={()=>addItem("iron")}>Slick iron! 6.99$/KG</Cardc></div>
  <div class="p-2 bd-highlight"><Cardc img={wood} item="wood" onClick={()=>addItem("wood")}>MODMOA</Cardc></div>

</div>

<div class="d-flex flex-row bd-highlight mb-3" style={{position:"relative",marginTop:"100px"}}>
  <div class="p-2 bd-highlight"><Cardc img={wood} item="wood" onClick={()=>addItem("wood")}> 4x4 FRESH wood.</Cardc></div>
  <div class="p-2 bd-highlight"><Cardc img={metal} item="metal" onClick={()=>addItem("metal")}>Pure metal, purified filtered 10 times</Cardc></div>
  <div class="p-2 bd-highlight"><Cardc img={wood} item="wood" onClick={()=>addItem("wood")}>More wood</Cardc></div>
  <div class="p-2 bd-highlight"><Cardc img={wood} item="wood" onClick={()=>addItem("wood")}>Sand</Cardc></div>
 
</div>
<div style={{marginTop:"125px",position:"relative",width:"65%",right:"-10px"}}>
  <div><h1>Shipping Information</h1></div>
<Formc />
</div>
      </Container>
      
  </div>
  );
}

export default App;