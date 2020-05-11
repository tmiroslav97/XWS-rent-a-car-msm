import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap'
import PaginationContainer from '../Pagination/PaginationContainer';
import PaginationSize from '../../components/Pagination/PaginationSize';
import CarManufacturerComponent from '../../components/Codebooks/CarManufacturerComponent';
import { carManufacturersSelector } from '../../store/codebook/selectors';
import { fetchCarManufacturers, addCarManufacturer, editCarManufacturer } from '../../store/codebook/actions';
import FormModalContainer from '../Common/FormModalContainer';
import CodebookAdFormComponent from '../../components/Codebooks/CodebookAdFormComponent';
import CodebookEditFormComponent from '../../components/Codebooks/CodebookEditFormComponent';

const CarManufacturerContainer = () => {
    const dispatch = useDispatch();
    const carManufacturers = useSelector(carManufacturersSelector);
    const isFetchCarManufacturers = carManufacturers.isFetch;
    const [nextPage, setNextPage] = useState(carManufacturers.nextPage);
    const [size, setSize] = useState(carManufacturers.size);
    const [validated, setValidated] = useState(false);
    const [showAdForm, setShowAdForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        dispatch(
            fetchCarManufacturers({
                nextPage,
                size
            })
        );
    }, [nextPage, size]);


    if (!isFetchCarManufacturers) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>;
    }


    const handleAddCarManufacturer = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(event.target);

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            dispatch(
                addCarManufacturer(
                    data.get('name')
                )
            );
            setValidated(false);
            setShowAdForm(false);
        }
    };

    const handleEditCarManufaturer = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(event.target);

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            dispatch(
                editCarManufacturer({
                    "id": data.get('id'),
                    "name": data.get('name')
                })
            );
            setValidated(false);
            setShowEditForm(false);
        }
    };

    const handleDelete = (event) => {

    };


    return (
        <Container>
            <FormModalContainer show={showAdForm} setShow={setShowAdForm} name={'Proizvodjac automobila'} footer={false} onSubmit={handleAddCarManufacturer} validated={validated} component={CodebookAdFormComponent} ></FormModalContainer>
            <FormModalContainer show={showEditForm} setShow={setShowEditForm} name={'Proizvodjac automobila'} footer={false} onSubmit={handleEditCarManufaturer} selectedItem={selectedItem} validated={validated} component={CodebookEditFormComponent} ></FormModalContainer>
            <Row>
                <Col md={{ span: 8, offset: 2 }} xs={12}>
                    <h2 className="border-bottom">Sifarnik proizvodjaca automobila</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 2, offset: 3 }} xs={12}>
                    <Button variant="outline-primary" onClick={() => setShowAdForm(true)}>Dodaj</Button>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 12, offset: 3 }} xs={12}>
                    <PaginationSize size={size} setSize={setSize} />
                </Col>
            </Row>
            <Row>
                <CarManufacturerComponent carManufacturers={carManufacturers.data} setShow={setShowEditForm} setSelectedItem={setSelectedItem} handleDelete={handleDelete}></CarManufacturerComponent>
            </Row>
            <Row>
                <PaginationContainer setNextPage={setNextPage} totalPageCnt={carManufacturers.totalPageCnt} nextPage={nextPage}></PaginationContainer>
            </Row>
        </Container >
    );
}

export default CarManufacturerContainer;
