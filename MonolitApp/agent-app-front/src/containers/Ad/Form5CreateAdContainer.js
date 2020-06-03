import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form5CreateAd from '../../components/Ad/Form5CreateAd'
import { createdAd, uploadImage } from '../../store/ad/actions';
import { Form, Button, ButtonGroup, ButtonToolbar, Row, Col, Container, Image, Card } from 'react-bootstrap';
import { imageNameSelector  } from '../../store/ad/selectors';

const Form5CreateAdContainer = (props) => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const [photos, setPhotos] = useState([]);
    const [photo, setPhoto] = useState();
    const [photoName, setPhotoName] = useState("");
    const [imagePreviewUrl, setImagePreviewUrl] = useState();
    const [file, setFile] = useState();
    const [brPhotos, setBrPhotos] = useState(0);
    const [flagCover, setFlagCover] = useState();
    const [flag1, setFlag1] = useState();
    const [flag2, setFlag2] = useState();

    const imageName = useSelector(imageNameSelector);
    

    const handleForm5 = (event) => {
        event.preventDefault();
        const form = event.target;
        if(brPhotos === 4 && props.coverPhoto != null){
            let dto = [];
            
            props.setFormData({
                ...props.formData,
                imagesDTO: JSON.stringify(props.imagesDTO)
            });
            console.log(props.formData);
            setValidated(false);
            props.handleNext();
        }else{
            event.stopPropagation();
            setValidated(true);
        }
        if(brPhotos < 4){
            setFlag1(true);
        }
        if(props.coverPhoto == null){
            setFlag2(true);
        }
    };

    const handleImageChange = (e) => {

        if(e.target.files[0] != null){
            let reader = new FileReader();
            let files = e.target.files[0];
            setFile(e.target.files[0]);
            let name = e.target.files[0].name;
            let naziv = "image" + photos.length;
            let flag = 0;
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
                    
                    // props.setImagesDTO([...props.imagesDTO, naziv]);
                    setBrPhotos(brPhotos + 1);
                    if(brPhotos === 4){
                        setFlag1(false);
                    }
                }
                reader.readAsDataURL(e.target.files[0])
                console.log(photos);
    
                let formData = new FormData();
                formData.append('photo', e.target.files[0]);
                formData.append('data', JSON.stringify(files.name));
    
                dispatch(
                    uploadImage(formData)
                );

                if(imageName.isFetch){
                    console.log(imageName);
                    console.log(props.imageDTO);
                    let s = props.imageDTO;
                    s.push(imageName.data);
                    console.log(s);
                    props.setImagesDTO(s);
                    // props.setImagesDTO([...props.imagesDTO, naziv]);
                }
            }
        }
      
    };

    const removeImage = (id) => {
        console.log("brisanje")
        console.log(id);
        let temp = [];
        let t = [];
        props.setImagesDTO([]);
        
        photos.map((photo)=>{
            if(photo.id === id){
                console.log(photo.name + " " + photo.id);
            }
            let naziv = "image" + temp.length;
            if(photo.id != id){
                let p = {
                    "id": temp.length,
                    "imagePreviewUrl": photo.imagePreviewUrl,
                    "name": photo.name
                };
                temp.push(p);
                t.push(naziv);
            }
        })
        console.log(temp);
        setPhotos(temp);
        props.setImagesDTO(t);
        setBrPhotos(brPhotos - 1);
        console.log(photos);
    };

    const setCoverPhoto = (id) => {
        console.log("stisnuto dugme");
        console.log(id);
        photos.map((photo)=>{
            if(photo.id === id){
                console.log(photo.name + " " + photo.id);
                props.setCoverPhoto(photo.name);
                setFlagCover(id);
                setFlag2(false);
            }
        })
    };
    const removeCoverPhoto = (id) => {
        console.log("stisnuto dugme");
        console.log(id);
        photos.map((photo)=>{
            if(photo.id === id){
                console.log(photo.name + " " + photo.id);
                props.setCoverPhoto();
                setFlagCover();
            }
        })
    };

    const previewImage = () => {
        let rez = [];
        photos.map((photo) => {
            rez.push(
                <Card key={photo.id} id={photo.id} className="imgPreview" id={photo.id} border="secondary" style={{ height: "140px", width: "140px", margin: "10px" }} >
                    <ButtonGroup style={{ height: "40px", width: "140px" }} >
                        
                        {
                            (flagCover === photo.id) ?
                            <Button  onClick={() => {removeCoverPhoto(photo.id)}} >Uncover</Button> 
                            :
                            <Button onClick={() => {setCoverPhoto(photo.id)}} >Cover</Button> 
                        }
                        <Button onClick={() => {removeImage(photo.id)}}>X</Button>
                        
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
            brPhotos={brPhotos}
            flag1={flag1} flag2={flag2}
        />
    );
}
export default Form5CreateAdContainer;