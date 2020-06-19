import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { history } from '../../index';
import jwt_decode from 'jwt-decode';


const AdComponent = (props) => {

    // <Card.Link onClick={() => { history.push('/agent-firm/ad-detail-view/' + variant.id); }}>
    //     Vise detalja
    // </Card.Link>

    const hasRole = (accessRole) => {

        if (props.token != null) {
            const roles = jwt_decode(props.token).roles;
            const role = roles.filter(val => accessRole.includes(val));
            return role.length > 0;
        } else {
            return false;
        }
    };
console.log(props.ads)
    return (

        props.ads.map((variant, idx) => (

            <Card
                key={idx}
                border="secondary"
                className="mb-5"
            >
                <Card.Body>
                    <Card.Title>{variant.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{variant.carManufacturer} {variant.carModel}  </Card.Subtitle>
                    <Row>
                        <Col md={4}>
                            <Card.Img src="/img-ad/fiat.jpg" />
                        </Col>
                        <Col >
                            <br />
                            <Row>
                                <Col sm={2}>
                                    <Card.Img src="/img-icon/seat-num.png" />
                                </Col>
                                <Card.Text>
                                    {variant.childrenSeatNum}
                                </Card.Text>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <Card.Img src="/img-icon/location.png" />
                                </Col>
                                <Card.Text>
                                    {variant.location}
                                </Card.Text>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <Card.Img src="/img-icon/price-tag.png" />
                                </Col>
                                <Card.Text>
                                    {variant.price} $
                                        </Card.Text>
                            </Row>

                        </Col>
                        <Col>
                            <br />
                            <Row>
                                <Col sm={2}>
                                    <Card.Img src="/img-icon/fuel24.png" />
                                </Col>
                                <Card.Text>
                                    {variant.fuelType}
                                </Card.Text>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <Card.Img src="/img-icon/km.png" />
                                </Col>
                                <Card.Text>
                                    {variant.mileage}
                                </Card.Text>
                            </Row>
                            <Button variant="link" onClick={() => { history.push('/ad-detail-view/' + variant.id); }}>Vise detalja</Button>
                        </Col>

                        <Col>
                            {
                                //hasRole(['ROLE_USER']) ? <Button variant="outline-success" >Dodaj u korpu</Button> : null
                            }
                        </Col>

                    </Row>
                </Card.Body>
            </Card>
        ))

    );
}

export default AdComponent;