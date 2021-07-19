import {FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS} from "./products.actions";

const INITIAL_STATE = {data: {}, error: undefined, loading: false, archive: new Set()};

function productsReducer(state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case FETCH_PRODUCTS_REQUEST:
            return {...state, loading: true};
        case FETCH_PRODUCTS_SUCCESS:
            // Normalize the data by id
            const data = payload.reduce(function (prev, curr) {
                prev[curr.id] = curr;
                return prev;
            }, {})
            return {...state, data, loading: false, error: undefined};
        case FETCH_PRODUCTS_ERROR:
            return {...state, error: payload, loading: false};
        default:
            return state;
    }
}

export default productsReducer;
