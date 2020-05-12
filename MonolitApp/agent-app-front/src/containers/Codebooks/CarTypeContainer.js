import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap'
import PaginationContainer from '../Pagination/PaginationContainer';
import PaginationSize from '../../components/Pagination/PaginationSize';
import CarTypeComponent from '../../components/Codebooks/CarTypeComponent';
import { carTypesSelector } from '../../store/codebook/selectors';
import { fetchCarTypes, addCarType, editCarType, deleteCarType } from '../../store/codebook/actions';
import FormModalContainer from '../Common/FormModalContainer';
import DeleteModalContainer from '../Common/DeleteModalContainer';
import CodebookAdFormComponent from '../../components/Codebooks/CodebookAdFormComponent';
import CodebookEditFormComponent from '../../components/Codebooks/CodebookEditFormComponent';
import SpinnerContainer from '../Common/SpinnerContainer';

const CarTypeContainer = () => {
    const dispatch = useDispatch();
    const carTypes = useSelector(carTypesSelector);
    const [nextPage, setNextPage] = useState(carTypes.nextPage);
    const [size, setSize] = useState(carTypes.size);
    const [validated, setValidated] = useState(false);
    const [showAdForm, setShowAdForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        dispatch(
            fetchCarTypes({
                nextPage,
                size
            })
        );
    }, [nextPage, size]);

    const handleAdCarType = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(event.target);

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            dispatch(
                addCarType(
                    data.get('name')
                )
            );
            setValidated(false);
            setShowAdForm(false);
        }
    };

    const handleEditCarType = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(event.target);

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            dispatch(
                editCarType({
                    "id": data.get('id'),
                    "name": data.get('name')
                })
            );
            setValidated(false);
            setShowEditForm(false);
        }
    };

    const handleDeleteCarType = () => {
        setShowDeleteModal(false);
        dispatch(
            deleteCarType(selectedItem)
        );
    };

    const handleEdit = (carType) => {
        setSelectedItem(carType);
        setShowEditForm(true);
    };

    const handleDelete = (id) => {
        setSelectedItem(id);
        setShowDeleteModal(true);
    };

    return (
        <Container>
            <FormModalContainer show={showAdForm} setShow={setShowAdForm} name={'Tip automobila'} footer={false} onSubmit={handleAdCarType} validated={validated} component={CodebookAdFormComponent} />
            <FormModalContainer show={showEditForm} setShow={setShowEditForm} name={'Tip automobila'} footer={false} onSubmit={handleEditCarType} selectedItem={selectedItem} validated={validated} component={CodebookEditFormComponent} />
            <DeleteModalContainer show={showDeleteModal} setShow={setShowDeleteModal} onDelete={handleDeleteCarType} />
            <Row>
                <Col md={{ span: 6, offset: 3 }} xs={12}>
                    <h2 className="border-bottom">Šifarnik tipova automobila</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 2, offset: 3 }} xs={12}>
                    <Button className="mb-5" variant="outline-primary" onClick={() => setShowAdForm(true)}>Dodaj</Button>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 12, offset: 3 }} xs={12}>
                    <PaginationSize size={size} setSize={setSize} />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 12, offset: 3 }} xs={12}>

                    {
                        carTypes.isFetch ? <CarTypeComponent carTypes={carTypes.data} handleEdit={handleEdit} handleDelete={handleDelete} /> : <SpinnerContainer />
                    }
                </Col>
            </Row>
            <Row>
                <PaginationContainer setNextPage={setNextPage} totalPageCnt={carTypes.totalPageCnt} nextPage={nextPage} />
            </Row>
        </Container >
    );
}

export default CarTypeContainer;
