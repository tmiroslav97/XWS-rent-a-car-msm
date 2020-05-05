export function putCarManufacturers(state, payload) {
    return {
        ...state,
        carManufacturers: payload
    };
}