import React, { useState, useEffect } from 'react';
import AdDetailViewComponent from '../../components/Ad/AdDetailViewComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import PaginationContainer from '../Pagination/PaginationContainer';
import PaginationSize from '../../components/Pagination/PaginationSize';
import { adsSelector } from '../../store/ad/selectors'; 
import { fetchAds, fetchAd } from '../../store/ad/actions';
import SpinnerContainer from '../Common/SpinnerContainer';


const AdDetailViewContainer = (props) => {
    const dispatch = useDispatch();
    const ad = useSelector(adsSelector);
    const isFetchAd = ad.isFetch;

    const adId = props.match.params.ad;
    
   console.log(ad)
    useEffect(() => {
        dispatch(
            fetchAd({
                adId,
                
            })
        );
    }, [adId]);
    


    return(
       
        <Container >
       
            <Row>
                <Col >
                {/* <AdDetailViewComponent id={adId}/> */}
                    {
                        isFetchAd ?  <AdDetailViewComponent id={adId} ad={ad.data}/> : <SpinnerContainer />
                    }
                </Col>
            </Row>

        </Container>

       
    );
}

export default AdDetailViewContainer;