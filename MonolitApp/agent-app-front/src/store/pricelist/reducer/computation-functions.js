export function putPriceList(state, payload) {
    return {
        ...state,
        pricelists: payload
    };
}