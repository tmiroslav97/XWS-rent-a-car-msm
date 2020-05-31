import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OrdinarySearchComponent from '../../components/Search/OrdinarySearchComponent';


const OrdinarySearchContainer = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [toggleAdvancedSearch, setToggled] = useState(false);
    const [lowValue, setLowValue] = useState(0);
    const [highValue, setHighValue] = useState(3000);
    const [cdw, setCDW] = useState(false);

    const handleChangePrice = (e) => {
        console.log('setting level', e)
        setLowValue(e[0]);
        setHighValue(e[1]);
        //kasni za jedan  
        console.log(lowValue);
        console.log(highValue);
    }

    const handleChange1 = (date) => {
        setStartDate(date.target.value);
        console.log(date.target.value);

    };

    const handleChange2 = (date) => {
        setEndDate(date.target.value);
        console.log(date.target.value);
    };

    const hanleLocation = (location) => {
        console.log(location.target.value)
    }

    const handleKm1 = (e) => {
        console.log(e.target.value)
    }

    const handleKm2 = (e) => {
        console.log(e.target.value)
    }

    const handleSeat = (e) => {
        console.log(e.target.value)
    }

    const handleCDW = (e) =>{
        console.log(e.target.checked)
        
    }
    return (

        <Container>
            <br />
            <Row>
                <Col>
                    <OrdinarySearchComponent
                        startDate={startDate}
                        endDate={endDate}
                        toggleAdvancedSearch={toggleAdvancedSearch}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                        setToggled={setToggled}
                        handleChange1={handleChange1}
                        handleChange2={handleChange2}
                        handleChangePrice={handleChangePrice}
                        highValue={highValue}
                        lowValue={lowValue}
                        hanleLocation={hanleLocation}
                        handleKm1={handleKm1}
                        handleKm2={handleKm2}
                        handleSeat={handleSeat}
                        handleCDW={handleCDW}
                        setCDW={setCDW}

                    />
                </Col>
            </Row>
            <br />
        </Container>


    );
}

export default OrdinarySearchContainer;