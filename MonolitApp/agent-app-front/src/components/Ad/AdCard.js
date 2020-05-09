import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom"; 

const AdCard = (props) => {
    return(
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>Naziv oglasa</Card.Header>
                        <Card.Body>
                            <Row>
                               <Col md={2}>
                                    <Card.Img variant="top"  src="holder.js/100px180" />
                               </Col>
                                <Col>
                                    <Card.Text>
                                        {props.ads}
                                    </Card.Text>
                                   {/* <Link>Vise detalja > </Link> */}
                                </Col>
                                <Col>
                                    <Card.Text>
                                        dsadasdadas
                                    </Card.Text>
                                </Col>
                                <Col md={2}>
                                    <Button variant="outline-success">Rezervisi</Button>{' '}
                                </Col>
                            </Row>           
                        </Card.Body>
                    </Card>
                 </Col>
             </Row>
         </Container>      
    );
}

export default AdCard;