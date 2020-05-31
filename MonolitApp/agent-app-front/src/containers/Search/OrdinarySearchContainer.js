import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import OrdinarySearchComponent from '../../components/Search/OrdinarySearchComponent';
import { carManufacturersSelector, carTypesSelector, carModelsSelector } from '../../store/codebook/selectors';
import { fetchAllCarManufacturers, fetchAllCarTypes, fetchAllCarModels } from '../../store/codebook/actions';


const OrdinarySearchContainer = () => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [toggleAdvancedSearch, setToggled] = useState(false);
    const [lowValue, setLowValue] = useState(0);
    const [highValue, setHighValue] = useState(3000);
    const [cdw, setCDW] = useState(false);

    const carManufacturers = useSelector(carManufacturersSelector);
    const carModels = useSelector(carModelsSelector);
    const carTypes = useSelector(carTypesSelector);

    useEffect(() => {
        dispatch(
            fetchAllCarManufacturers()
        );
        dispatch(
            fetchAllCarTypes()
        );
    }, []);

    const getCarManufacturers = () => {
        const listCarMan = [];
        if (carManufacturers.isFetch) {
            carManufacturers.data.map((carManufacturer) => {
                listCarMan.push(<option key={carManufacturer.id}>{carManufacturer.name}</option>);
            })
        }
        return listCarMan;
    }

    const handleCarManufacturers = (event) => {
        let index = event.target.options.selectedIndex;
        dispatch(
            fetchAllCarModels({
                "id" : carManufacturers.data[index].id
            })
        );
    };

    const getCarModels = () => {
        const listCarModel = [];
        if (carModels.isFetch) {
            let i = 0;
            carModels.data.map((carModel)=> {
                listCarModel.push(<option key={i}>{carModel}</option>);
                i++
            })
        }

        return listCarModel;
    }

    const getCarTypes = () => {
        const listCarType = [];
        if (carTypes.isFetch) {
            carTypes.data.map((carType) => {
                listCarType.push(<option key={carType.id}>{carType.name}</option>);
            })
        }
        return listCarType;
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

    const handleChangePrice = (e) => {
        console.log('setting level', e)
        setLowValue(e[0]);
        setHighValue(e[1]);
        //kasni za jedan  
        console.log(lowValue);
        console.log(highValue);
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
                        getCarManufacturers={getCarManufacturers}
                        handleCarManufacturers={handleCarManufacturers}
                        getCarModels={getCarModels}
                        getCarTypes={getCarTypes}

                    />
                </Col>
            </Row>
            <br />
        </Container>


    );
}

export default OrdinarySearchContainer;