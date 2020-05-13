import React from 'react';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap'


const AdDetailViewComponent = (props) => {


    return(

        <Container>
            <Row>
                <Card 
                    border="primary"
                >
                    <Card.Header>Detaljan prikaz oglasa</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            naziv oglasa
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
       
    );
}

export default AdDetailViewComponent;