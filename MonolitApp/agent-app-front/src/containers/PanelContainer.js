import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button, CardDeck, ListGroup, Tab, Nav } from 'react-bootstrap'
import jwt_decode from 'jwt-decode';
import { tokenSelector } from '../store/user/selectors';
import CarManufacturerContainer from '../containers/Codebooks/CarManufacturerContainer';
import CarModelContainer from '../containers/Codebooks/CarModelContainer';
import CarTypeContainer from '../containers/Codebooks/CarTypeContainer';
import FuelTypeContainer from '../containers/Codebooks/FuelTypeContainer';
import GearboxTypeContainer from '../containers/Codebooks/GearboxTypeContainer';
import AdListContainer from '../containers/Ad/AdListContainer';


const PanelContainer = () => {
    const token = useSelector(tokenSelector);

    const hasRole = (accessRole) => {

        if (token != null) {
            const roles = jwt_decode(token).roles;
            const role = roles.filter(val => accessRole.includes(val));
            return role.length > 0;
        } else {
            return false;
        }
    };
    return (
        <Tab.Container id="dash-tabs" mountOnEnter={true} unmountOnExit={true} >
            <Container fluid>
                <Row>
                    <Col sm={2} md={2} xs={12} className="pl-0" >
                        <Nav variant="pills" className="flex-column bg-light">
                            {hasRole(['ROLE_ADMIN']) &&
                                <Nav.Item>
                                    <Nav.Link eventKey="car-man">Proizvođači automobila</Nav.Link>
                                </Nav.Item>
                            }
                            {hasRole(['ROLE_ADMIN']) &&
                                <Nav.Item>
                                    <Nav.Link eventKey="car-model">Modeli automobila</Nav.Link>
                                </Nav.Item>
                            }
                            {hasRole(['ROLE_ADMIN']) &&
                                <Nav.Item>
                                    <Nav.Link eventKey="car-type">Tipovi automobila</Nav.Link>
                                </Nav.Item>
                            }
                            {hasRole(['ROLE_ADMIN']) &&
                                <Nav.Item>
                                    <Nav.Link eventKey="fuel-type">Tipovi goriva</Nav.Link>
                                </Nav.Item>
                            }
                            {hasRole(['ROLE_ADMIN']) &&
                                <Nav.Item>
                                    <Nav.Link eventKey="gearbox-type">Tipovi mjenjača</Nav.Link>
                                </Nav.Item>
                            }
                            
                            <Nav.Item>
                                <Nav.Link eventKey="ads">Oglasi</Nav.Link>
                            </Nav.Item>
                            
                        </Nav>
                    </Col>
                    <Col md={10} sm={10} xs={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="car-man">
                                <CarManufacturerContainer />
                            </Tab.Pane>
                            <Tab.Pane eventKey="car-model">
                                <CarModelContainer />
                            </Tab.Pane>
                            <Tab.Pane eventKey="car-type">
                                <CarTypeContainer />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fuel-type">
                                <FuelTypeContainer />
                            </Tab.Pane>
                            <Tab.Pane eventKey="gearbox-type">
                                <GearboxTypeContainer />
                            </Tab.Pane>
                            <Tab.Pane eventKey="ads">
                                <AdListContainer />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Container>
        </Tab.Container>
    );
}

export default PanelContainer;
