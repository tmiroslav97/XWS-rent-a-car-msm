export function putCarManufacturers(state, payload) {
    return {
        ...state,
        carManufactuerers: payload
    };
}

export function putIsFetchCodebook(state, payload) {
    return {
        ...state,
        isFetchCodebook: payload
    };
}
  