export function putAds(state, payload) {
    return {
        ...state,
        ads: payload
    };
}

export function putAd(state, payload) {
    return {
        ...state,
        ad: payload
    };
}

