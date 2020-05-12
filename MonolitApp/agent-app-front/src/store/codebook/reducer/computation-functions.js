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

export function putFuelTypes(state, payload) {
    return {
        ...state,
        fuelTypes: payload
    };
}

export function putGearboxTypes(state, payload) {
    return {
        ...state,
        gearboxTypes: payload
    };
}

export function putCarModels(state, payload) {
    return {
        ...state,
        carModels: payload
    };
}