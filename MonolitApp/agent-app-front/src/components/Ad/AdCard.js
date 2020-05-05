import React from 'react';
import { Row, Col, Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom"; 

const AdCard = (props) => {
    return(
        // <Container>
        //     <Row>
        //         <Col>
                    <Card>
                        <Card.Header>Naziv oglasa</Card.Header>
                        <Card.Body>
                            <Row>
                               <Col md={2}>
                                    <Card.Img variant="top"  src="holder.js/100px180" />
                               </Col>
                                <Col>
                                    <Card.Text>
                                        <Row>
                                        <Col>
                                            Nesto o oglasu npr: predjeni km, godina  
                                        </Col>
                                        <Col>
                                            tip mjenjaca
                                            gorivo
                                            broj sjedista
                                        </Col>
                                        </Row>
                                    </Card.Text>
                                   <Link>Vise detalja ></Link>
                                </Col>
                                <Col md={2}>
                                    <Button variant="outline-success">Rezervisi</Button>{' '}
                                </Col>
                            </Row>           
                        </Card.Body>
                    </Card>
        //         </Col>
        //     </Row>
        // </Container>      
    );
}

export default AdCard;