import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap'
import PaginationContainer from '../Pagination/PaginationContainer';
import PaginationSize from '../../components/Pagination/PaginationSize';
import FuelTypeComponent from '../../components/Codebooks/FuelTypeComponent';
import { fuelTypesSelector } from '../../store/codebook/selectors';
import { fetchFuelTypes, addFuelType, editFuelType, deleteFuelType } from '../../store/codebook/actions';
import FormModalContainer from '../Common/FormModalContainer';
import DeleteModalContainer from '../Common/DeleteModalContainer';
import CodebookAdFormComponent from '../../components/Codebooks/CodebookAdFormComponent';
import CodebookEditFormComponent from '../../components/Codebooks/CodebookEditFormComponent';

const FuelTypeContainer = () => {
    const dispatch = useDispatch();
    const fuelTypes = useSelector(fuelTypesSelector);
    const isFetch = fuelTypes.isFetch;
    const [nextPage, setNextPage] = useState(fuelTypes.nextPage);
    const [size, setSize] = useState(fuelTypes.size);
    const [validated, setValidated] = useState(false);
    const [showAdForm, setShowAdForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        dispatch(
            fetchFuelTypes({
                nextPage,
                size
            })
        );
    }, [nextPage, size]);


    if (!isFetch) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>;
    }

    const handleAddFuelType = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(event.target);

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            dispatch(
                addFuelType(
                    data.get('name')
                )
            );
            setValidated(false);
            setShowAdForm(false);
        }
    };

    const handleEditFuelType = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(event.target);

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            dispatch(
                editFuelType({
                    "id": data.get('id'),
                    "name": data.get('name')
                })
            );
            setValidated(false);
            setShowEditForm(false);
        }
    };

    const handleDeleteFuelType = () => {
        setShowDeleteModal(false);
        dispatch(
            deleteFuelType(selectedItem)
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
            <FormModalContainer show={showAdForm} setShow={setShowAdForm} name={'Tip pogonskog goriva'} footer={false} onSubmit={handleAddFuelType} validated={validated} component={CodebookAdFormComponent} ></FormModalContainer>
            <FormModalContainer show={showEditForm} setShow={setShowEditForm} name={'Tip pogonskog goriva'} footer={false} onSubmit={handleEditFuelType} selectedItem={selectedItem} validated={validated} component={CodebookEditFormComponent} ></FormModalContainer>
            <DeleteModalContainer show={showDeleteModal} setShow={setShowDeleteModal} onDelete={handleDeleteFuelType}></DeleteModalContainer>
            <Row>
                <Col md={{ span: 8, offset: 2 }} xs={12}>
                    <h2 className="border-bottom">Šifarnik tipova pogonskog goriva</h2>
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
                <FuelTypeComponent fuelTypes={fuelTypes.data} handleEdit={handleEdit} handleDelete={handleDelete}></FuelTypeComponent>
            </Row>
            <Row>
                <PaginationContainer setNextPage={setNextPage} totalPageCnt={fuelTypes.totalPageCnt} nextPage={nextPage}></PaginationContainer>
            </Row>
        </Container >
    );
}

export default FuelTypeContainer;
