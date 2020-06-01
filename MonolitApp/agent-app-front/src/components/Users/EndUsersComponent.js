import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap'

const EndUsersComponent = (props) => {

    return (
        <Row>
            <Col md={6} xs={12}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Ime i prezime</th>
                            <th>Broj otkazivanja</th>
                            <th className="text-right">Blokiranje</th>
                            <th className="text-right">Zabrana</th>
                            <th className="text-right">Logicko brisanje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.endUsers.map((endUser) => {
                                return (
                                    <tr key={endUser.id}>
                                        <td>{endUser.email}</td>
                                        <td>{endUser.firstName + ' ' + endUser.lastName}</td>
                                        <td>{endUser.canceledCnt}</td>
                                        <td align="right">
                                            <Button variant="outline-success" onClick={() => { props.handleEdit(carManufacturer); }}>Izmjeni</Button>
                                        </td>
                                        <td align="right">
                                            <Button variant="outline-danger" onClick={() => { props.handleDelete(carManufacturer.id); }}>Obriši</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default EndUsersComponent;
