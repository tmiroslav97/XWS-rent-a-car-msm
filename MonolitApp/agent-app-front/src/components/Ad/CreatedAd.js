import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const CreatedAd = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [coverPhoto, setCoverPhoto] = useState();
    const [location, setLocation] = useState();
    const [distanceLimitFlag, setDistanceLimitFlag] = useState(false);
    const [distanceLimit, setDistanceLimit] = useState();
    //car
    const [carManufacturer, setCarManufacturer] = useState();
    const [carModel, setCarModel] = useState();
    const [carType, setCarType] = useState();
    const [year, setYear] = useState();
    const [mileage, setMileage] = useState();
    const [gearboxType, setGearboxType] = useState();
    const [fuelType, setFuelType] = useState();
    const [childrenSeatNum, setChildrenSeatNum] = useState();
    const [cdw, setCdw] = useState();
    const [androidFlag, setAndroidFlag] = useState();
    //pricelist
    const [creationDate, setCreationDate] = useState();
    const [pricePerKm, setPricePerKm] = useState();
    const [pricePerKmCDW, setPricePerKmCDW] = useState();
    const [pricePerDay, setPricePerDay] = useState();
    const [id, setId] = useState();
    //carCalendarTerm 

    return(
        <Container>
            <Row>
                <Col md={{ span: 5, offset: 4 }} xs={12}>
                    <h2 className="border-bottom">Dodavanje oglasa</h2>
                </Col>
            </Row>
            <Row>
               <Col >
                   <Form id="createdAdFrom">
                      
                            <Form.Row>
                                <Form.Group as={Col} md="3" controlId="formBasicName">
                                    <Form.Label>Naziv oglasa</Form.Label>
                                    <Form.Control required type="text" placeholder="Naziv oglasa" 
                                    onChange={({ currentTarget }) => {
                                        setName(currentTarget.value);
                                    }}/> 
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="formBasicCarManufacturer">
                                    <Form.Label>Proizvodjac</Form.Label>
                                    <Form.Control required type="text" placeholder="Proizvodjac" 
                                    onChange={({ currentTarget }) => {
                                        setCarManufacturer(currentTarget.value);
                                    }}/> 
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="3" controlId="formBasicName">
                                    <Form.Label>Slika</Form.Label>
                                    <Form.Control required type="text" placeholder="Slika" 
                                    onChange={({ currentTarget }) => {
                                        setCoverPhoto(currentTarget.value);
                                    }}/> 
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="formBasicCarModel">
                                    <Form.Label>Model</Form.Label>
                                    <Form.Control required type="text" placeholder="Model" 
                                    onChange={({ currentTarget }) => {
                                        setCarModel(currentTarget.value);
                                    }}/> 
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="3" controlId="formBasicLocation">
                                    <Form.Label>Lokacija</Form.Label>
                                    <Form.Control required type="text" placeholder="Lokacija" 
                                    onChange={({ currentTarget }) => {
                                        setLocation(currentTarget.value);
                                    }}/> 
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="formBasicCarType">
                                    <Form.Label>Tip</Form.Label>
                                    <Form.Control required type="text" placeholder="Tip" 
                                    onChange={({ currentTarget }) => {
                                        setCarType(currentTarget.value);
                                    }}/> 
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="3" controlId="formBasicDistanceLimitFlag">
                                    <Form.Check type="checkbox" label="Da li je ogranicena kilometraza?" 
                                    onChange={({ currentTarget }) => {
                                        setDistanceLimitFlag(currentTarget.value);
                                    }}/>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="formBasicYear">
                                    <Form.Label>Godina proizvodnje</Form.Label>
                                    <Form.Control required type="text" placeholder="Godina proizvodnje" 
                                    onChange={({ currentTarget }) => {
                                        setYear(currentTarget.value);
                                    }}/> 
                                </Form.Group>
                            </Form.Row>
                            { distanceLimitFlag ?
                                <Form.Row>
                                    <Form.Group as={Col} md="3" controlId="formBasicDistanceLimit">
                                        <Form.Label>Unesi kilometrazu</Form.Label>
                                        <Form.Control required type="text" placeholder="kilometraza" 
                                        onChange={({ currentTarget }) => {
                                            setDistanceLimit(currentTarget.value);
                                        }}/> 
                                    </Form.Group>
                                </Form.Row>
                            : null
                            }
                       
                   </Form>
               </Col> 
            </Row>
        </Container>
    );

}
export default CreatedAd;