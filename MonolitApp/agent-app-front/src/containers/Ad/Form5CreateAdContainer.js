import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form5CreateAd from '../../components/Ad/Form5CreateAd'
import { createdAd, uploadImage } from '../../store/ad/actions';
import { Form, Button, ButtonGroup, ButtonToolbar, Row, Col, Container, Image, Card } from 'react-bootstrap';

const Form5CreateAdContainer = (props) => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const handleForm5 = (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            // props.setFormData({
            //     ...props.formData,
            //     name: form.name.value,
            //     location: form.location.value,
            //     distanceLimitFlag: distanceLimitFlag,
            //     distanceLimit: distanceLimit,
            //     carManufacturer: form.carManufacturer.value,
            //     carModel: form.carModel.value,
            //     carType: form.carType.value,
            //     year: form.year.value,
            //     mileage: form.mileage.value
            // });
            // props.setActiveStep(2);
            // props.setActiveStep(4);
            console.log(props.formData);
            setValidated(false);
            props.handleNext();
            //treba dodati oglas.... 
            // props.handleCreatedAd();
        }
    };

    const [photos, setPhotos] = useState([]);
    const [photo, setPhoto] = useState();
    const [photoName, setPhotoName] = useState("");
    const [imagePreviewUrl, setImagePreviewUrl] = useState();
    const [file, setFile] = useState();

    const handleImageChange = (e) => {
        let reader = new FileReader();
        let files = e.target.files[0];
        setFile(e.target.files[0]);
        let name = e.target.files[0].name;
        let flag = 0
        props.imagesDTO.map((image) => {
            if (image.name === name) {
                flag = 1;
            }
        })
        if (flag === 0) {
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
                let i = photos.length;
                let temp = {
                    "id": i,
                    "imagePreviewUrl": reader.result,
                    "name": name
                };
                setPhotos([...photos, temp]);
                props.setImagesDTO([...props.imagesDTO, name]);
            }
            reader.readAsDataURL(e.target.files[0])
            console.log(photos);

            let formData = new FormData();
            formData.append('photo', e.target.files[0]);
            formData.append('data', JSON.stringify(files.name));

            dispatch(
                uploadImage(formData)
            );
        }

    }


    const removeImage = (id) => {
        console.log("brisanje")
        // console.log(event.target.value);
        console.log(id);
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

    const setCoverPhoto = (event) => {
        console.log("stisnuto dugme");
        console.log(event)

    }

    const previewImage = () => {
        let rez = [];
        photos.map((photo) => {
            rez.push(
                <Card key={photo.name} id={photo.id} className="imgPreview" id={photo.id} border="secondary" style={{ height: "140px", width: "140px", margin: "10px" }} >

                    <ButtonGroup style={{ height: "40px", width: "140px" }} >
                        <Button onChange={(key)=>removeImage(key)}>X</Button>
                        <Button  onChange={(key)=>setCoverPhoto(key)}>Cover</Button>
                    </ButtonGroup>
                    <img style={{ height: "100px", width: "140px" }} src={photo.imagePreviewUrl} />
                    {/* <div style={{ height: "20px", width: "140px" }}>{photo.name}</div> */}

                </Card>
            )
        });
        return rez;
    }

    return (
        <Form5CreateAd
            onSubmit={handleForm5}
            validated={validated}
            activeStep={props.activeStep}
            steps={props.steps}
            isStepOptional={props.isStepOptional}
            handleBack={props.handleBack}
            handleSkip={props.handleSkip}
            handleReset={props.handleReset}
            handleImageChange={handleImageChange}
            imagePreviewUrl={imagePreviewUrl}
            previewImage={previewImage}
            coverPhoto={props.coverPhoto} setCoverPhoto={props.setCoverPhoto}
            imagesDTO={props.imagesDTO} setImagesDTO={props.setImagesDTO}
            setCoverPhoto={setCoverPhoto}
            removeImage={removeImage}
        />
    );
}
export default Form5CreateAdContainer;