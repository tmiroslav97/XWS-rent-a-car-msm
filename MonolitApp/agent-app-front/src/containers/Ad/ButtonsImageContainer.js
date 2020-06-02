import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'
import { Form, Button, ButtonGroup, ButtonToolbar, Row, Col, Container, Image, Card } from 'react-bootstrap';

const ButtonsImageContainer = (props) => {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <div className='buttons fadein'>
                        <div className='button'>
                            <label htmlFor='single'>
                                <FontAwesomeIcon icon={faImage} color='#3B5998' size='10x' />
                            </label>
                            <input type='file' id='single' onChange={props.onChange} />
                        </div>

                        {/* <div className='button'>
                            <label htmlFor='multi'>
                                <FontAwesomeIcon icon={faImages} color='#6d84b4' size='10x' />
                            </label>
                            <input type='file' id='multi' onChange={props.onChange} multiple />
                        </div> */}
                    </div>
                </Card.Body>
            </Card>

        </Container>
    );
}

export default ButtonsImageContainer;