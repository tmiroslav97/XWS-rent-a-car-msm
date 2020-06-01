import React from 'react';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'

const AdDetailViewComponent = (props) => {
    console.log(props);
    var androidFlag = props.ad.androidFlag;
    if(androidFlag===false){
        androidFlag = "Ne"
    }else{
        androidFlag = "Da"
    }

    return(

        <>
                 <br />
                 <Card 
                    border="secondary"
                    // style={{  width: '50rem'}}  

                >
                    {/* <Card.Header as="h5">{props.ad.name}</Card.Header> */}
                    <Card.Body>
                        <Card.Title as="h4">{props.ad.name}</Card.Title>
                        <Row>
                            <Col md={5}>
                                <Card.Img variant="top" src="holder.js/100px160" />                            </Col>
                            <Col >
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Proizvodjac: {props.ad.carManufacturer}</ListGroup.Item>
                                    <ListGroup.Item>Model: {props.ad.carModel}</ListGroup.Item>
                                    <ListGroup.Item>Tip: {props.ad.carType}</ListGroup.Item>
                                    <ListGroup.Item>Mjenjac: {props.ad.gearboxType}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                            <>
                                <br/>
                            </>
                        <Row>
                            <Col md={5}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item> datum objavljivanja oglasa</ListGroup.Item>
                                    <ListGroup.Item> broj rentiranja</ListGroup.Item>
                                    <ListGroup.Item>   ocjena</ListGroup.Item>
                                    <ListGroup.Item>   like</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Broj sjedista za djecu:  {props.ad.childrenSeatNum}</ListGroup.Item>
                                    <ListGroup.Item> godiste auta</ListGroup.Item>
                                    <ListGroup.Item>Posjedovanje android uredjaja: {androidFlag}</ListGroup.Item>
                                    <ListGroup.Item>{props.ad.year}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                            <>
                                <br/>
                            </>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Title as="h6">
                                        Opis oglasa  
                                    </Card.Title>
                                    <Card.Body>
                                        dsdsdsadsadasdsan
                                        asfafddsfsddddddddddddddddddddddddddd
                                    </Card.Body>
                                </Card>
                                
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
        </>
       
    );
}

export default AdDetailViewComponent;