import{
    FETCH_PRICE_LISTS,
    FETCH_PRICE_LIST,
    PUT_PRICE_LIST
} from './constants';

export const fetchPriceLists = payload => ({
    type: FETCH_PRICE_LISTS,
    payload
});

export const fetchPriceList = payload => ({
    type: FETCH_PRICE_LIST,
    payload
});

export const putPriceList = payload => ({
    type: PUT_PRICE_LIST,
    payload
});