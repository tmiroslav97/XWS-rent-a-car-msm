import React from 'react';
import { history } from '../../index';
import { Row, Col, OverlayTrigger, Tooltip, ListGroup, Card } from 'react-bootstrap'

const EndUserRequestsComponent = (props) => {

    return (
        <div>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="border-bottom mt-5">Zahtjevi sa statusom {props.status}</h3>
                </Col>
            </Row>
            <Row>
                <Col md={6} xs={12}>
                    {
                        props.requests.map((req, idx) => {
                            return (
                                <Card border="secondary" key={idx} className="mt-2">
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>Datum podnosenja zahtjeva: {req.submitDate}</ListGroup.Item>
                                                    <ListGroup.Item>Datum pocetka rentiranja: {req.startDate}</ListGroup.Item>
                                                    <ListGroup.Item>Datum zavrsetka rentiranja: {req.endDate}</ListGroup.Item>
                                                    {
                                                        req.bundle ?
                                                            <ListGroup.Item>Bundle zahtjev</ListGroup.Item> : null
                                                    }
                                                </ListGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>Naziv oglasa:</ListGroup.Item>
                                                    {
                                                        req.ads.map((ad, idx) => {
                                                            return (
                                                                <OverlayTrigger key={idx} overlay={<Tooltip id="tooltip-disabled">Klikni za detaljno</Tooltip>}>
                                                                    <span className="d-inline-block">
                                                                        <ListGroup.Item action onClick={() => { history.push('/agent-firm/ad-detail-view/' + ad.id); }}>{ad.adName}</ListGroup.Item>
                                                                    </span>
                                                                </OverlayTrigger>
                                                            );
                                                        })
                                                    }
                                                </ListGroup>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            );
                        })
                    }
                </Col>
            </Row>
        </div >
    );
}

export default EndUserRequestsComponent;
