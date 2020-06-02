import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Form, Button, ButtonGroup, ButtonToolbar, Row, Col, Container, Image } from 'react-bootstrap';

const ImagesContainer = (props) => {

    const viewImage = () => {
        let view = [];
        props.images.map((image, i) =>
            view.push(<div key={i} className='fadein'>
                <div
                    onClick={() => props.removeImage(image.public_id)}
                    className='delete'
                >
                    <FontAwesomeIcon icon={faTimesCircle} size='2x' />
                </div>
                <img src={image.secure_url} alt='' />
            </div>
            )

        );
        return view;
    };
    
    return (
        <Container>{viewImage()}</Container>
    );
}

export default ImagesContainer;