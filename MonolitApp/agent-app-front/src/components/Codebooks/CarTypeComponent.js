import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap'

const CarTypeComponent = (props) => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }} xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Naziv</th>
                                <th className="text-right">Izmjena</th>
                                <th className="text-right">Brisanje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.carTypes.map((carType) => {
                                    return (
                                        <tr key={carType.id}>
                                            <td>{carType.name}</td>
                                            <td align="right">
                                                <Button variant="outline-success" onClick={() => { props.handleEdit(carType); }}>Izmjeni</Button>
                                            </td>
                                            <td align="right">
                                                <Button variant="outline-danger" onClick={() => { props.handleDelete(carType.id) }}>Obrisi</Button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container >
    );
}

export default CarTypeComponent;
