import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import PaginationContainer from '../Pagination/PaginationContainer';
import CarManufacturerComponent from '../../components/Codebooks/CarManufacturerComponent';
import { carManufacturersSelector } from '../../store/codebook/selectors';
import { fetchCarManufacturers } from '../../store/codebook/actions';

const CarManufacturerContainer = () => {
    const dispatch = useDispatch();
    const carManufacturers = useSelector(carManufacturersSelector);
    const isFetchCarManufacturers = carManufacturers.isFetch;
    const [nextPage, setNextPage] = useState(carManufacturers.nextPage);

    useEffect(() => {
        dispatch(
            fetchCarManufacturers({
                nextPage
            })
        );
    }, [nextPage]);

    if (!isFetchCarManufacturers) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>;
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }} xs={12}>
                    <h2 className="border-bottom">Sifarnik proizvodjaca automobila</h2>
                </Col>
            </Row>
            <Row>
                <CarManufacturerComponent carManufacturers={carManufacturers.data}></CarManufacturerComponent>
            </Row>
            <Row>
                <PaginationContainer setNextPage={setNextPage} totalPageCnt={carManufacturers.totalPageCnt} nextPage={nextPage}></PaginationContainer>
            </Row>
        </Container>
    );
}

export default CarManufacturerContainer;
