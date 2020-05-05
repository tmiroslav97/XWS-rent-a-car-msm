import React from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap'

const PaginationComponent = (props) => {

    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Pagination onClick={props.onClick} className="pagination justify-content-center mb-5">
                        <Pagination.First />
                        <Pagination.Prev />
                        {props.items}
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
}

export default PaginationComponent;
