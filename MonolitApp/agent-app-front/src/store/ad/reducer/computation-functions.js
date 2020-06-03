export function putAds(state, payload) {
    return {
        ...state,
        ads: payload
    };
}

export function putImageName(state, payload) {
    return {
        ...state,
        imageName: payload
    };
}
