import {fetchProducts as _fetchProducts} from "../../api/client";

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const fetchProducts = () => async dispatch => {
    dispatch({type: FETCH_PRODUCTS_REQUEST});
    try {
        const products = await _fetchProducts();
        dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: products})
    } catch (error) {
        dispatch({type: FETCH_PRODUCTS_ERROR, payload: error})
    }
}
