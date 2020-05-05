import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap'
import PaginationContainer from '../Pagination/PaginationContainer';
import CarManufacturerComponent from '../../components/Codebooks/CarManufacturerComponent';
import { carManufacturersSelector, isFetchCodebookSelector } from '../../store/codebook/selectors';
import { nextPageSelector } from '../../store/common/selectors';

const CarManufacturerContainer = () => {
    const carManufacturers = useSelector(carManufacturersSelector);
    const isFetchCodebook = useSelector(isFetchCodebookSelector);
    const [nextPage, setNextPage] = useState(useSelector(nextPageSelector));

    return (
        <Container>
            <CarManufacturerComponent carManufacturers={carManufacturers}></CarManufacturerComponent>
            <PaginationContainer setNextPage={setNextPage} nextPage={nextPage}></PaginationContainer>
        </Container>
    );
}

export default CarManufacturerContainer;
