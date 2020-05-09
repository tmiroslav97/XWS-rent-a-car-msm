import React, { useState, useEffect } from 'react';
import AdCard from '../../components/Ad/AdCard';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Spinner } from 'react-bootstrap';
import { adsSelector } from '../../store/ad/selectors';
import PaginationContainer from '../Pagination/PaginationContainer';
import { fetchAds } from '../../store/ad/actions';


const AdListContainer = () => {
    const dispatch = useDispatch();
    const ads = useSelector(adsSelector);
    const isFetchAds = ads.isFetch;
    const [nextPage, setNextPage] = useState(ads.nextPage);

    useEffect(() => {
        dispatch(
            fetchAds({
                nextPage
            })
        );
    }, [nextPage]);

    if (!isFetchAds) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>;
    }


    return(
        <Container>
            <Row>
                <AdCard ads={ads.data}></AdCard>
            </Row>
            <Row>
                <PaginationContainer setNextPage={setNextPage} totalPageCnt={ads.totalPageCnt} nextPage={nextPage}></PaginationContainer>
            </Row>
        </Container>

       
    );
}

export default AdListContainer;