import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';



const AdCard = (props) => {
console.log(props);

    return (

        props.ads.map((variant, idx) => (
            <>
                <br />
                <Card
                    key={idx}
                    border="secondary"
                    // style={{ width: '50rem' }}

                >
                    {/* <Card.Header>{variant.name}</Card.Header> */}
                    <Card.Body>
                        <Card.Title>{variant.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{variant.carManufacturer} {variant.carModel}  </Card.Subtitle>
                        <Row>
                            <Col>
                                <Card.Img src="/img-ad/fiat.jpg" />
                            </Col>
                            <Col>
                                <br />
                                <Row>
                                    <Col xs={3}>
                                        <Card.Img src="/img-icon/seat-num.png" />
                                    </Col>
                                    <Card.Text>
                                        {variant.childrenSeatNum}
                                    </Card.Text>
                                </Row>
                                <Row>
                                    <Col xs={3}>
                                        <Card.Img src="/img-icon/location.png" />
                                    </Col>
                                    <Card.Text>
                                        {variant.location}
                                    </Card.Text>
                                </Row>
                                <Row>
                                    <Col xs={3}>
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
                                    <Col xs={3}>
                                        <Card.Img src="/img-icon/fuel24.png" />
                                    </Col>
                                    <Card.Text>
                                        {variant.fuelType}
                                    </Card.Text>
                                </Row>
                                <Row>
                                    <Col xs={3}>
                                        <Card.Img src="/img-icon/km.png" />
                                    </Col>
                                    <Card.Text>
                                        {variant.mileage}
                                    </Card.Text>
                                </Row>
                                <Card.Link href={'/agent-firm/ad-detail-view/' + variant.id} >Vise detalja ></Card.Link>

                            </Col>
                            <Col md={2}>
                                <br />
                                <br />
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