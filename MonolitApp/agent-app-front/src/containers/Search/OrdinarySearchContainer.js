import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OrdinarySearchComponent from '../../components/Search/OrdinarySearchComponent';


const OrdinarySearchContainer = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [toggleAdvancedSearch, setToggled] = useState(false);
    const [lowValue, setLowValue] = useState(0);
    const [highValue, setHighValue] = useState(3000);

    const handleChangePrice = (e) => {
        console.log('setting level', e)
        setLowValue(e[0]);
        setHighValue(e[1]);
        //kasni za jedan  
        console.log(lowValue);
        console.log(highValue);
    }

    const handleChange1 = (date) => {
        setStartDate(date);
        console.log(date);
    };

    const handleChange2 = (date) => {
        setEndDate(date);
        console.log(date);
    };



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


                    />
                </Col>
            </Row>
            <br />
        </Container>


    );
}

export default OrdinarySearchContainer;