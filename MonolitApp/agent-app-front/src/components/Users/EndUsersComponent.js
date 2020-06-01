import React from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap'

const EndUsersComponent = (props) => {

    return (
        <Row>
            <Col md={12} xs={12}>
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
                                            {!endUser.deleted && endUser.enabled ? <Button>Blokiraj</Button> : <Button>Odblokiraj</Button>}
                                        </td>
                                        <td align="right">
                                            {!endUser.deleted && endUser.obligated ? <Button>Uvedi zabranu</Button> : <Button>Skini zabranu</Button>}
                                        </td>
                                        <td align="right">
                                            {endUser.deleted ? <Button>Vrati</Button> : <Button>Obriši</Button>}
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
