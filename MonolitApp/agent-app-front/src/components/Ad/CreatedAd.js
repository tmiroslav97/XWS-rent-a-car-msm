import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { createdAd } from '../../store/ad/actions';

const CreatedAd = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [coverPhoto, setCoverPhoto] = useState();
    const [location, setLocation] = useState();
    const [distanceLimitFlag, setDistanceLimitFlag] = useState(false);
    const [distanceLimit, setDistanceLimit] = useState(null);
    //car
    const [carManufacturer, setCarManufacturer] = useState();
    const [carModel, setCarModel] = useState();
    const [carType, setCarType] = useState();
    const [year, setYear] = useState();
    const [mileage, setMileage] = useState();
    const [gearboxType, setGearboxType] = useState();
    const [fuelType, setFuelType] = useState();
    const [childrenSeatNum, setChildrenSeatNum] = useState();
    const [cdw, setCdw] = useState(false);
    const [androidFlag, setAndroidFlag] = useState(false);
    //pricelist
    const [pricePerKm, setPricePerKm] = useState(null);
    const [pricePerKmCDW, setPricePerKmCDW] = useState(null);
    const [pricePerDay, setPricePerDay] = useState(null);
    const [id, setId] = useState(null);
    //carCalendarTerm 

    const handleCreatedAd = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        // if (form.checkValidity() === false) {
        //     event.stopPropagation();
        //     setValidated(true);
        // } else {
            dispatch(
                createdAd({
                    name, 
                    coverPhoto,
                    location,
                    distanceLimitFlag,
                    distanceLimit,
                    carManufacturer,
                    carModel,
                    carType,
                    year,
                    mileage,
                    gearboxType,
                    fuelType,
                    childrenSeatNum,
                    cdw,
                    androidFlag,
                    pricePerKm,
                    pricePerKmCDW,
                    pricePerDay,
                    id
                })
            );
            // setValidated(false);
        // }
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 5, offset: 4 }} xs={12}>
                    <h2 className="border-bottom">Dodavanje oglasa</h2>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Form id="createdAdFrom" onSubmit={handleCreatedAd} >
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col} controlId="formBasicName">
                                    <Form.Label>Naziv oglasa</Form.Label>
                                    <Form.Control required type="text" placeholder="Naziv oglasa"
                                        onChange={({ currentTarget }) => {
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicName">
                                    <Form.File id="formcheck-api-regular">
                                        <Form.File.Label>Slika</Form.File.Label>
                                        <Form.File.Input onChange={({ currentTarget }) => {
                                            setCoverPhoto(currentTarget.value);
                                        }} />

                                    </Form.File>

                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicLocation">
                                    <Form.Label>Lokacija</Form.Label>
                                    <Form.Control required type="text" placeholder="Lokacija"
                                        onChange={({ currentTarget }) => {
                                            setLocation(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicDistanceLimitFlag">
                                    <Form.Check type="checkbox" label="Da li je ogranicena kilometraza?"
                                        onChange={({ currentTarget }) => {
                                            setDistanceLimitFlag(currentTarget.value);
                                        }} />
                                </Form.Group>
                                {distanceLimitFlag ?
                                    <Form.Group as={Col} controlId="formBasicDistanceLimit">
                                        <Form.Label>Unesi kilometrazu</Form.Label>
                                        <Form.Control required type="text" placeholder="kilometraza"
                                            onChange={({ currentTarget }) => {
                                                setDistanceLimit(currentTarget.value);
                                            }} />
                                    </Form.Group>
                                    : null
                                }

                            </Col>
                            <Col>
                                <Form.Group as={Col} controlId="formBasicCarManufacturer">
                                    <Form.Label>Proizvodjac</Form.Label>
                                    <Form.Control required type="text" placeholder="Proizvodjac"
                                        onChange={({ currentTarget }) => {
                                            setCarManufacturer(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicCarModel">
                                    <Form.Label>Model</Form.Label>
                                    <Form.Control required type="text" placeholder="Model"
                                        onChange={({ currentTarget }) => {
                                            setCarModel(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicCarType">
                                    <Form.Label>Tip</Form.Label>
                                    <Form.Control required type="text" placeholder="Tip"
                                        onChange={({ currentTarget }) => {
                                            setCarType(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicYear">
                                    <Form.Label>Godina proizvodnje</Form.Label>
                                    <Form.Control required type="text" placeholder="Godina proizvodnje"
                                        onChange={({ currentTarget }) => {
                                            setYear(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicMileage">
                                    <Form.Label>Predjeni kilometri</Form.Label>
                                    <Form.Control required type="number" placeholder="Predjeni kilometri"
                                        onChange={({ currentTarget }) => {
                                            setMileage(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicGearboxType">
                                    <Form.Label>Menjac</Form.Label>
                                    <Form.Control required type="text" placeholder="Menjac"
                                        onChange={({ currentTarget }) => {
                                            setGearboxType(currentTarget.value);
                                        }} />
                                </Form.Group>
                                

                            </Col>
                            <Col>
                                <Form.Group as={Col} controlId="formBasicFuelType">
                                    <Form.Label>Tip goriva</Form.Label>
                                    <Form.Control required type="text" placeholder="Tip goriva"
                                        onChange={({ currentTarget }) => {
                                            setFuelType(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicChildrenSeatNum">
                                    <Form.Label>Broj sedista za decu</Form.Label>
                                    <Form.Control required type="number" placeholder="Broj sedista za decu"
                                        onChange={({ currentTarget }) => {
                                            setChildrenSeatNum(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicChildrenSeatNum">
                                    <Form.Check type="checkbox" label="Da li poseduje CDW?"
                                        onChange={({ currentTarget }) => {
                                            setCdw(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicChildrenSeatNum">
                                    <Form.Check type="checkbox" label="Da li poseduje android uredjaj?"
                                        onChange={({ currentTarget }) => {
                                            setAndroidFlag(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicCarManufacturer">
                                    <Form.Label>Check box za biranje vec postojeceg cenovnika</Form.Label>
                                    <Form.Control required type="number" placeholder="Cena po danu"
                                        onChange={({ currentTarget }) => {
                                            setId(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicCarManufacturer">
                                    <Form.Label>Cena po kilometru</Form.Label>
                                    <Form.Control required type="number" placeholder="Cena po kilometru"
                                        onChange={({ currentTarget }) => {
                                            setPricePerKm(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicCarManufacturer">
                                    <Form.Label>Cena po kilometru (CDW)</Form.Label>
                                    <Form.Control required type="number" placeholder="Cena po kilometru (CDW)"
                                        onChange={({ currentTarget }) => {
                                            setPricePerKmCDW(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicCarManufacturer">
                                    <Form.Label>Cena po danu</Form.Label>
                                    <Form.Control required type="number" placeholder="Cena po danu"
                                        onChange={({ currentTarget }) => {
                                            setPricePerDay(currentTarget.value);
                                        }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="btnCreatedAd">
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