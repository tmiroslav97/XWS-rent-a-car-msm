import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import PaginationContainer from '../Pagination/PaginationContainer';
import CarManufacturerComponent from '../../components/Codebooks/CarManufacturerComponent';

const CarManufacturerContainer = (props) => {

    return (
        <Container>
            <CarManufacturerComponent></CarManufacturerComponent>
            <PaginationContainer></PaginationContainer>
        </Container>
    );
}

export default CarManufacturerContainer;
