import React, { useState, useEffect } from 'react';
import AdCard from '../../components/Ad/AdCard';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { adsSelector } from '../../store/ad/selectors';
import PaginationContainer from '../Pagination/PaginationContainer';
import PaginationSize from '../../components/Pagination/PaginationSize';

import { fetchAds } from '../../store/ad/actions';
import SpinnerContainer from '../Common/SpinnerContainer';


const AdListContainer = () => {
    const dispatch = useDispatch();
    const ads = useSelector(adsSelector);
    const isFetchAds = ads.isFetch;
    const [nextPage, setNextPage] = useState(ads.nextPage);
    const [size, setSize] = useState(ads.size);

    useEffect(() => {
        dispatch(
            fetchAds({
                nextPage,
                size
            })
        );
    }, [nextPage, size]);

    // const handleDetailView = (id) => {
    //     console.log(id);
    //     console.log("Oglas")
    // };

    return(
       
        <Container>
             <Row>
                {/* <Col md={{ span: 12, offset: 3 }} xs={12}> */}
                <Col>
                    <PaginationSize size={size} setSize={setSize} />
                </Col>
            </Row>
            <Row>
                {/* <Col md={{ span: 12, offset: 3 }} xs={12}> */}
                <Col>
                    {
                        isFetchAds ?  <AdCard ads={ads.data}/> : <SpinnerContainer />
                    }
                </Col>
            </Row>
            <Row>
                <PaginationContainer setNextPage={setNextPage} totalPageCnt={ads.totalPageCnt} nextPage={nextPage}></PaginationContainer>
            </Row>
        </Container>

       
    );
}

export default AdListContainer;