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
    const ads = useSelector(adsSelector);
    // const isFetchAds = ads.isFetch;
    // const [nextPage, setNextPage] = useState(ads.nextPage);
    // const [size, setSize] = useState(ads.size);
    const adId = props.match.params.ad;
    useEffect(() => {
        dispatch(
            fetchAd({
                adId
            })
        );
    }, [adId]);
    


    return(
       
        <Container fluid>
             <Row>
                <Col md={{ span: 12, offset: 3 }} xs={12}>
                    {/* <PaginationSize size={size} setSize={setSize} /> */}
                </Col>
            </Row>
            <Row>
                <Col  md={{ span: 12, offset: 2 }} xs={12}>
                <AdDetailViewComponent id={adId}/>
                    {/* {
                        isFetchAds ?  <AdDetailViewComponent /> : <SpinnerContainer />
                    } */}
                </Col>
            </Row>
            <Row>
                {/* <PaginationContainer setNextPage={setNextPage} totalPageCnt={ads.totalPageCnt} nextPage={nextPage}></PaginationContainer> */}
            </Row>
        </Container>

       
    );
}

export default AdDetailViewContainer;