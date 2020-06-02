import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Form, Button, ButtonGroup, ButtonToolbar, Row, Col, Container, Image, Card } from 'react-bootstrap';

const ImagesContainer = (props) => {

    // const viewImage = () => {
    //     let view = [];
    //     props.images.map((image, i) =>
    //         view.push(<div key={i} className='fadein'>
    //             <div
    //                 onClick={() => props.removeImage(image.public_id)}
    //                 className='delete'
    //             >
    //                 <FontAwesomeIcon icon={faTimesCircle} size='2x' />
    //             </div>
    //             <img src={image.secure_url} alt='' />
    //         </div>
    //         )
    //     );
    //     return view;
    // };
    const removeImage = () => {
        console.log("brisanje")
        // console.log(event.target.value);
        console.log(props.id);
        // let id = event.target.value;
        // photos.map((photo)=>{
        //     if(photo.id === id){
        //         console.log(photo.name + " " + photo.id);
        //     }
        // })
        // this.setState({
        //   images: this.state.images.filter(image => image.public_id !== id)
        // })
    }

    const setCoverPhoto = () => {
        console.log("stisnuto dugme");
       console.log(props.id)
      
    }

    return (
        <div>
            {props.imagePreviewUrl ?
                <Card className="imgPreview" id = {props.id} border="secondary"  style={{ height: "140px", width: "140px", margin: "10px"}} >

                    <ButtonGroup style={{ height: "40px", width: "140px" }} >
                        <Button onChange={removeImage}>X</Button>
                        <Button onChange={setCoverPhoto}>Cover</Button>
                    </ButtonGroup>
                    <img style={{ height: "100px", width: "140px" }} src={props.imagePreviewUrl} />
                    {/* <div style={{ height: "20px", width: "140px" }}>{props.name}</div> */}

                </Card>
                :
                <div className="previewText">Please select an Image for Preview</div>
            }
        </div>
    );
}

export default ImagesContainer;