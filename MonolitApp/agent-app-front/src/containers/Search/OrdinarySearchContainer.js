import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OrdinarySearchComponent from '../../components/Search/OrdinarySearchComponent';


const OrdinarySearchContainer = () => {
    // const dispatch = useDispatch();
    // const ads = useSelector(adsSelector);
    // const isFetchAds = ads.isFetch;
    // const [nextPage, setNextPage] = useState(ads.nextPage);
    // const [size, setSize] = useState(ads.size);

    // useEffect(() => {
    //     dispatch(
    //         fetchAds({
    //             nextPage,
    //             size
    //         })
    //     );
    // }, [nextPage, size]);



    return(
       
        <Container>
            <OrdinarySearchComponent></OrdinarySearchComponent>
        </Container>

       
    );
}

export default OrdinarySearchContainer;