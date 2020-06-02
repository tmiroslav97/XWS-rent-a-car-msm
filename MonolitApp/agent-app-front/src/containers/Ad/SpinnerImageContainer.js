import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlingBall } from '@fortawesome/free-solid-svg-icons'
import { Form, Button, ButtonGroup, ButtonToolbar, Row, Col, Container, Image } from 'react-bootstrap';

const SpinnerImageContainer = (props) => {
    return (
        <Container>
            <div className='spinner fadein'>
                <FontAwesomeIcon icon={faBowlingBall} size='5x' color='#3B5998' />
            </div>
        </Container>
    );
}

export default SpinnerImageContainer;