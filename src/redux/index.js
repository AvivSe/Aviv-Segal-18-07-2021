import { combineReducers } from "redux";
import productsReducer from "./products/products.reducer";
import currencyReducer from "./currency/currency.reducer";

const reducers = combineReducers({
    products: productsReducer,
    currency: currencyReducer,
})

export default reducers;
