import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap'

const CarManufacturerComponent = (props) => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Naziv</th>
                                <th>Akcija</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.carManufacturers.map((carManufacturer) => {
                                    return (
                                        <tr key={carManufacturer.id}>
                                            <td>{carManufacturer.name}</td>
                                            <td><Button>Izmjeni</Button></td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default CarManufacturerComponent;
