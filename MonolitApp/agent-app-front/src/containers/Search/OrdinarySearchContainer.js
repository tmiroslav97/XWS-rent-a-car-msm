import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import OrdinarySearchComponent from '../../components/Search/OrdinarySearchComponent';
import { carManufacturersSelector, carTypesSelector, carModelsSelector, gearboxTypesSelector, fuelTypesSelector } from '../../store/codebook/selectors';
import { fetchAllCarManufacturers, fetchAllCarTypes, fetchAllCarModels, fetchAllGearboxTypes, fetchAllFuelTypes, putCarManufacturers, putCarModels, putCarTypes, putFuelTypes, putGearboxTypes } from '../../store/codebook/actions';
import { searchAd } from '../../store/ad/actions';


const OrdinarySearchContainer = () => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [toggleAdvancedSearch, setToggled] = useState(false);
    const [lowValue, setLowValue] = useState(0);
    const [highValue, setHighValue] = useState(3000);
    const [cdw, setCDW] = useState(false);

    const carManufacturers = useSelector(carManufacturersSelector);
    const carModels = useSelector(carModelsSelector);
    const carTypes = useSelector(carTypesSelector);
    const gearboxTypes = useSelector(gearboxTypesSelector);
    const fuelTypes = useSelector(fuelTypesSelector);

    useEffect(() => {
        dispatch(
            fetchAllCarManufacturers()
        );
        dispatch(
            fetchAllCarTypes()
        );
        dispatch(
            fetchAllGearboxTypes()
        );
        dispatch(
            fetchAllFuelTypes()
        );
        return () => {
            dispatch(putCarManufacturers({
                'data': [],
                'totalPageCnt': 0,
                'nextPage': 0,
                'size': 10,
                'isFetch': false
            }));

            dispatch(putCarModels({
                'data': [],
                'totalPageCnt': 0,
                'nextPage': 0,
                'size': 10,
                'isFetch': false
            }));

            dispatch(putCarTypes({
                'data': [],
                'totalPageCnt': 0,
                'nextPage': 0,
                'size': 10,
                'isFetch': false
            }));

            dispatch(putFuelTypes({
                'data': [],
                'totalPageCnt': 0,
                'nextPage': 0,
                'size': 10,
                'isFetch': false
            }));

            dispatch(putGearboxTypes({
                'data': [],
                'totalPageCnt': 0,
                'nextPage': 0,
                'size': 10,
                'isFetch': false
            }));
        };
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
                "id": carManufacturers.data[index].id
            })
        );
       
    };

    const getCarModels = () => {
        const listCarModel = [];
        if (carModels.isFetch) {
            let i = 0;
            carModels.data.map((carModel) => {
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

    const getGearboxTypes = () => {
        const listGearboxTypes = [];
        if (gearboxTypes.isFetch) {
            gearboxTypes.data.map((gearboxType) => {
                listGearboxTypes.push(<option key={gearboxType.id}>{gearboxType.name}</option>);
            })
        }
        return listGearboxTypes;
    }

    const getFuelTypes = () => {
        const listFuelType = [];
        if (fuelTypes.isFetch) {
            fuelTypes.data.map((fuelType) => {
                listFuelType.push(<option key={fuelType.id}>{fuelType.name}</option>);
            })
        }
        return listFuelType;
    }

    const handleChange1 = (date) => {
        setStartDate(date.target.value);
        console.log(startDate);

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

    const handleCDW = (e) => {
        console.log(e.target.checked)

    }

    console.log("Dugme: ");
    console.log(toggleAdvancedSearch)

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
        let data = null;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            if(toggleAdvancedSearch === false){
                data = {
                    'location': form.location.value,
                    'startDate': startDate,
                    'endDate': endDate
                }
            }else{
                data = {
                    'location': form.location.value,
                    'startDate': startDate,
                    'endDate': endDate,
                    'carManufacturer': form.carManufacturer.value,
                    'carModel': form.carModel.value,
                    'carType': form.carType.value,
                    'mileage': form.mileage.value,
                    'mileageKM': form.mileageKM.value,
                    'gearboxType': form.gearboxType.value,
                    'fuelType': form.fuelType.value,
                    'childrenSeatNum': form.childrenSeatNum.value,
                    'cdw': cdw
                } 
            }
          
            console.log(data)
            let formData = new FormData(form);
            formData.append('data', JSON.stringify(data));
            dispatch(searchAd(formData));
            setValidated(false);
        }
    };

    return (

        <Container>
            <br />
            <Row>
                <Col>
                    <OrdinarySearchComponent
                        onSubmit={handleForm}
                        validated={validated}
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
                        getGearboxTypes={getGearboxTypes}
                        getFuelTypes={getFuelTypes}

                    />
                </Col>
            </Row>
            <br />
        </Container>


    );
}

export default OrdinarySearchContainer;