
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';

export const fetchProducts = () => dispatch => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST, payload: []});
}
