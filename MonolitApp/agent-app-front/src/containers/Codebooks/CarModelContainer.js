import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap'
import PaginationContainer from '../Pagination/PaginationContainer';
import PaginationSize from '../../components/Pagination/PaginationSize';
import CarModelComponent from '../../components/Codebooks/CarModelComponent';
import { carModelsSelector, carManufacturersSelector } from '../../store/codebook/selectors';
import { fetchCarModels, addCarModel, editCarModel, deleteCarModel, fetchAllCarManufacturers } from '../../store/codebook/actions';
import FormModalContainer from '../Common/FormModalContainer';
import DeleteModalContainer from '../Common/DeleteModalContainer';
import CodebookAdFormComponent from '../../components/Codebooks/CodebookAdFormComponent';
import CodebookEditFormComponent from '../../components/Codebooks/CodebookEditFormComponent';

const CarModelContainer = () => {
    const dispatch = useDispatch();
    const carModels = useSelector(carModelsSelector);
    const carManufacturers = useSelector(carManufacturersSelector);
    const isFetch = carModels.isFetch;
    const [nextPage, setNextPage] = useState(carModels.nextPage);
    const [size, setSize] = useState(carModels.size);
    const [validated, setValidated] = useState(false);
    const [showAdForm, setShowAdForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        dispatch(
            fetchCarModels({
                nextPage,
                size
            })
        );
        dispatch(
            fetchAllCarManufacturers()
        );
    }, [nextPage, size]);



    if (!isFetch) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>;
    }

    const handleAddCarModel = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(event.target);

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            dispatch(
                addCarModel({
                    "name": data.get('name'),
                    "carManufacturer": data.get('selCarMan')

                })
            );
            setValidated(false);
            setShowAdForm(false);
        }
    };

    const handleEditCarModel = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(event.target);

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            dispatch(
                editCarModel({
                    "id": data.get('id'),
                    "name": data.get('name'),
                    "carManufacturer": data.get('selCarMan')
                })
            );
            setValidated(false);
            setShowEditForm(false);
        }
    };

    const handleDeleteCarModel = () => {
        setShowDeleteModal(false);
        dispatch(
            deleteCarModel(selectedItem)
        );
    };

    const handleEdit = (fuelType) => {
        setSelectedItem(fuelType);
        setShowEditForm(true);
    };

    const handleDelete = (id) => {
        setSelectedItem(id);
        setShowDeleteModal(true);
    };


    return (
        <Container>
            <FormModalContainer show={showAdForm} setShow={setShowAdForm} name={'Model automobila'} footer={false} data={carManufacturers.data} onSubmit={handleAddCarModel} validated={validated} component={CodebookAdFormComponent} ></FormModalContainer>
            <FormModalContainer show={showEditForm} setShow={setShowEditForm} name={'Model automobila'} footer={false} data={carManufacturers.data} onSubmit={handleEditCarModel} selectedItem={selectedItem} validated={validated} component={CodebookEditFormComponent} ></FormModalContainer>
            <DeleteModalContainer show={showDeleteModal} setShow={setShowDeleteModal} onDelete={handleDeleteCarModel}></DeleteModalContainer>
            <Row>
                <Col md={{ span: 8, offset: 2 }} xs={12}>
                    <h2 className="border-bottom">Šifarnik modela automobila</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 2, offset: 2 }} xs={12}>
                    <Button variant="outline-primary" onClick={() => setShowAdForm(true)}>Dodaj</Button>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 12, offset: 2 }} xs={12}>
                    <PaginationSize size={size} setSize={setSize} />
                </Col>
            </Row>
            <Row>
                <CarModelComponent carModels={carModels.data} handleEdit={handleEdit} handleDelete={handleDelete}></CarModelComponent>
            </Row>
            <Row>
                <PaginationContainer setNextPage={setNextPage} totalPageCnt={carModels.totalPageCnt} nextPage={nextPage}></PaginationContainer>
            </Row>
        </Container >
    );
}

export default CarModelContainer;
