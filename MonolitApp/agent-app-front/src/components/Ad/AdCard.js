import React from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';


const AdCard = (props) => {


    return(
        props.ads.map((variant, idx) => (
            <>
                    <br />
                    <Card
                         key={idx}
                         border="primary" 
                       
                    >
                        <Card.Header>{variant.name}</Card.Header>
                        <Card.Body>
                            <Row>
                               <Col md={2}>
                                    <Card.Img variant="top"  src="img/rent2.png" />
                               </Col>
                                <Col>
                              
                                    <Card.Text>
                                       {idx}     
                                    </Card.Text>
                                    <Card.Link href="#">Vise detalja ></Card.Link>
                                </Col>
                                <Col>
                                    <Card.Text>
                                        {variant.location}
                                    </Card.Text>
                                </Col>
                                <Col md={2}>
                                    <Button variant="outline-success">Rezervisi</Button>{' '}
                                </Col>
                            </Row>           
                        </Card.Body>
                    </Card>
                    <br />
                    </>
            ))
       
    );
}

export default AdCard;