import React from 'react';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'

const AdDetailViewComponent = (props) => {

    return(

        <>
                 <br />
                 <Card 
                    border="primary"
                    style={{  width: '50rem'}}  

                >
                    <Card.Header as="h5">{props.id}</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={5}>
                                <Card.Img variant="top" src="holder.js/100px160" />                            </Col>
                            <Col >
                                <ListGroup variant="flush">
                                    <ListGroup.Item>proizvodjac auta</ListGroup.Item>
                                    <ListGroup.Item> model auta</ListGroup.Item>
                                    <ListGroup.Item>  tip auta</ListGroup.Item>
                                    <ListGroup.Item>   tip goriva</ListGroup.Item>
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
                                    <ListGroup.Item> broj sjedista za djecu</ListGroup.Item>
                                    <ListGroup.Item> godiste auta</ListGroup.Item>
                                    <ListGroup.Item>   posjedovanje android uredjaja</ListGroup.Item>
                                    <ListGroup.Item>  predjeni kilometri</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                            <>
                                <br/>
                            </>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Title>
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