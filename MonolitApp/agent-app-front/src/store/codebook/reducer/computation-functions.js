export function putCarManufacturers(state, payload) {
    return {
        ...state,
        carManufacturers: payload
    };
}

export function putCarTypes(state, payload) {
    return {
        ...state,
        carTypes: payload
    };
}