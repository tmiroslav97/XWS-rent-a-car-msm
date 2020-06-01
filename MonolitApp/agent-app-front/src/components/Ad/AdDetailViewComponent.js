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
                >
                    <Card.Body>
                        <Card.Title as="h4">{props.ad.name}</Card.Title>
                        <Row>
                            <Col md={5}>
                                <Card.Img src="/img-ad/fiat.jpg" />               
                            </Col>
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
                                    <ListGroup.Item>Datum objavljivanja: {props.ad.publishedDate}</ListGroup.Item>
                                    <ListGroup.Item>Broj rentiranja: {props.ad.rentCnt}</ListGroup.Item>
                                    <ListGroup.Item>Ocjena: neki broj </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Broj sjedista za djecu:  {props.ad.childrenSeatNum}</ListGroup.Item>
                                    <ListGroup.Item>Godiste: {props.ad.year}</ListGroup.Item>
                                    <ListGroup.Item>Posjedovanje android uredjaja: {androidFlag}</ListGroup.Item>
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
                                        Opisss nekii fdffdsfdsfdsfdsfdsfdsfdsfdsfcddsc
                                        cdscdscsdc
                                        cdscdscs
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