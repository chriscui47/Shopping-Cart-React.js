import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
export class Cardc extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bought: false,
        }
    }
    render(){
        
    return(
        <div>
            <Card border="primary" style={{ width: '10rem',height: '10rem' }}>
            <Card.Img variant="top" src={this.props.img} />
            <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                
                    <Row>
                    <Col>
                    <Card.Text style={{position:"absolute",top:"-20px"}}>
                        {this.props.children}
                    </Card.Text>
                    </Col>
                    </Row>
                    <Row> <Button onClick={this.props.onClick} style={{position:"relative",bottom:"-30px",width:"200px",align:"left"}}>Add to Cart</Button></Row>
            </Card.Body>
            </Card>
            </div>
   ); }
}