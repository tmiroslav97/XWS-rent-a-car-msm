import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const CreatedAd = (props) => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 5, offset: 4 }} xs={12}>
                    <h2 className="border-bottom">Dodavanje oglasa</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form id="createdAdFrom" onSubmit={props.onSubmit} noValidate validated={props.validated}>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Label>Naziv oglasa</Form.Label>
                                    <Form.Control required name="name" type="text" id="txtName" placeholder="Naziv oglasa" defaultValue="oglas" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.File.Label>Dodaj sliku</Form.File.Label>
                                    <Form.File name="coverPhoto" id="fileCoverPhoto" placeholder="Slike" custom label={props.coverPhotoName}
                                        onChange={props.onPhotoChange}
                                    >
                                    </Form.File>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Lokacija</Form.Label>
                                    <Form.Control required name="location" id="txtLocation" type="text" placeholder="Lokacija" defaultValue="lokacija" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    {/* <Form.Check
                                        name="distanceLimitFlag"
                                        type="switch"
                                        id="custom-switch"
                                        label="Da li je ogranicena kilometraza?"
                                        onChange={props.handleDistanceLimitFlag}
                                    /> */}
                                    <Form.Check name="distanceLimitFlag" id="chbDistanceLimitFlag" type="checkbox" label="Da li je ogranicena kilometraza?" 
                                        onChange={props.handleDistanceLimitFlag} />
                                </Form.Group>
                                {props.distanceLimitFlag ?
                                    <Form.Group as={Col}>
                                        <Form.Label>Unesi kilometrazu</Form.Label>
                                        <Form.Control name="distanceLimit" id="txtDistanceLimit" type="text" placeholder="kilometraza" defaultValue="123" />
                                    </Form.Group>
                                    : null
                                }
                            </Col>

                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Label>Proizvodjac</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." required name="carManufacturer" id="txtCarManufacturer" placeholder="Proizvodjac" >
                                        <option>Choose...</option>
                                        <option>sd...</option>
                                    </Form.Control>
                                    {/* <Form.Control required name="carManufacturer" id="txtCarManufacturer" type="combobox" placeholder="Proizvodjac" /> */}
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Model</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." required name="carModel" id="txtCarModel" placeholder="Model">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                    {/* <Form.Control required name="carModel" id="txtCarModel" type="text" placeholder="Model" /> */}
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Tip</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." required name="carType" id="txtCarType" placeholder="Tip" >
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                    {/* <Form.Control required name="carType" id="txtCarType" type="text" placeholder="Tip" /> */}
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Godina proizvodnje</Form.Label>
                                    <Form.Control required name="year" id="dateYear" type="date" placeholder="Godina proizvodnje" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Predjeni kilometri</Form.Label>
                                    <Form.Control required name="mileage" id="numMileage" type="number" placeholder="Predjeni kilometri" defaultValue="34" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Menjac</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." required name="gearboxType" id="txtGearboxType" type="text" placeholder="Menjac" >
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Label>Tip goriva</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." required name="fuelType" id="txtFuelType" type="text" placeholder="Tip goriva" >
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Broj sedista za decu</Form.Label>
                                    <Form.Control required name="childrenSeatNum" id="numChildrenSeatNum" type="number" pattern=".{0,8}" placeholder="Broj sedista za decu" defaultValue="3" />
                                    {/* <Form.Control type="range" min="0" max="8" custom /> */}
                                    <Form.Control.Feedback type="invalid">
                                        min 0 max 8 sedista
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Check name="cdw" id="chbCDW" type="checkbox" label="Da li poseduje CDW?" onChange={props.handleCDW}/>
                                    {/* <Form.Check
                                        name="cdw"
                                        type="switch"
                                        id="custom-switch"
                                        label="Da li poseduje CDW?"
                                    /> */}
                                </Form.Group>
                                <Form.Group as={Col}>
                                    {/* <Form.Check
                                        name="androidFlag"
                                        type="switch"
                                        id="custom-switch"
                                        label="Da li poseduje android uredjaj?"
                                    /> */}
                                    <Form.Check name="androidFlag" id="chbAndroidFlag" type="checkbox" label="Da li poseduje android uredjaj?" onChange={props.handleAndroidFlag} />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Check box za biranje vec postojeceg cenovnika</Form.Label>
                                    <Form.Control name="id" id="selectId" placeholder="Cena po danu" as="select" type="text" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Cena po kilometru</Form.Label>
                                    <Form.Control name="pricePerKm" id="numPricePerKm" type="number" placeholder="Cena po kilometru"   defaultValue="12" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Cena po kilometru (CDW)</Form.Label>
                                    <Form.Control name="pricePerKmCDW" id="numPricePerKmCDW" type="number" placeholder="Cena po kilometru (CDW)"   defaultValue="12"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Cena po danu</Form.Label>
                                    <Form.Control name="pricePerDay" id="numPricePerDay" type="number" placeholder="Cena po danu"  defaultValue="12" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Button variant="primary" id="btnCreatedAd" type="submit">
                                        Dodaj
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}
export default CreatedAd;