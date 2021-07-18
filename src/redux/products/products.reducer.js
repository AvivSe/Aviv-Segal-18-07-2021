import {FETCH_PRODUCTS_REQUEST} from "./products.actions";

const INITIAL_STATE = {products: [], error: undefined, loading: false};

function productsReducer(state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case FETCH_PRODUCTS_REQUEST:
            return {...state, products: payload};
        default:
            return state;
    }
}

export default productsReducer;
