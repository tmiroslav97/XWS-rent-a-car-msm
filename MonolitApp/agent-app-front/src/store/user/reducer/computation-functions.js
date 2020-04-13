export function putToken(state, payload) {
    return {
        ...state,
        token: payload
    };
}
  