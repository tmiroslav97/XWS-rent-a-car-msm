export function putAds(state, payload) {
    return {
        ...state,
        ads: payload
    };
}