import React, { useState, useEffect } from 'react';
import AdCard from '../../components/Ad/AdCard';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { adsSelector } from '../../store/ad/selectors';
import PaginationContainer from '../Pagination/PaginationContainer';
import { fetchAds } from '../../store/ad/actions';
import SpinnerContainer from '../Common/SpinnerContainer';


const AdListContainer = () => {
    const dispatch = useDispatch();
    const ads = useSelector(adsSelector);
    const isFetchAds = ads.isFetch;
    const [nextPage, setNextPage] = useState(ads.nextPage);

    useEffect(() => {
        dispatch(
            fetchAds({
                nextPage,
            })
        );
    }, [nextPage]);

    return(
       
        <Container>
            <Row>
                <Col md={{ span: 12, offset: 3 }} xs={12}>
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