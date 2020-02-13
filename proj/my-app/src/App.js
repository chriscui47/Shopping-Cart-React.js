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

export function App() {
  let [items,setitems]=useState([]);
  let addItem=(e)=>{
  //pushing new item to hook
    setitems(prevArray => [...prevArray, e]);
  }
  let clearcart=()=>{
    setitems(prevArray=>[]);
  }
  return (
    <div>
      <Drop style={{align:'left', width:'10rem'}} items={items} clearcart={clearcart}/> 
      <Container>
      <Row>
        <Col><Cardc img={wood} item="wood" onClick={()=>addItem("wood")}> 4x4 FRESH wood.</Cardc></Col>
        <Col><Cardc img={metal} item="metal" onClick={()=>addItem("metal")}>Pure metal, purified filtered 10 times</Cardc></Col>
        <Col><Cardc img={wood} item="wood" onClick={()=>addItem("wood")}>MODMOA</Cardc></Col>

      </Row>
      </Container>
  </div>
  );
}

export default App;