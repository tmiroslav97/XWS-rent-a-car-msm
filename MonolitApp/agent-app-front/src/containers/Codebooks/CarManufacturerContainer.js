import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap'
import PaginationContainer from '../Pagination/PaginationContainer';
import CarManufacturerComponent from '../../components/Codebooks/CarManufacturerComponent';
import { carManufacturersSelector, isFetchCodebookSelector } from '../../store/codebook/selectors';
import { nextPageSelector } from '../../store/common/selectors';
import { fetchCarManufacturers } from '../../store/codebook/actions';

const CarManufacturerContainer = () => {
    const dispatch = useDispatch();
    const carManufacturers = useSelector(carManufacturersSelector);
    const isFetchCodebook = useSelector(isFetchCodebookSelector);
    const [nextPage, setNextPage] = useState(useSelector(nextPageSelector));

    useEffect(() => {
        dispatch(
            fetchCarManufacturers({
                nextPage
            })
        );
    }, [nextPage]);

    return (
        <Container>
            <CarManufacturerComponent carManufacturers={carManufacturers}></CarManufacturerComponent>
            <PaginationContainer setNextPage={setNextPage} nextPage={nextPage}></PaginationContainer>
        </Container>
    );
}

export default CarManufacturerContainer;
