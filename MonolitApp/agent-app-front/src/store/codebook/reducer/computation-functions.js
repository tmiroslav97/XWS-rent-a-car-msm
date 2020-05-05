export function putCarManufacturers(state, payload) {
    return {
        ...state,
        carManufacturers: payload
    };
}

export function putIsFetchCodebook(state, payload) {
    return {
        ...state,
        isFetchCodebook: payload
    };
}
  