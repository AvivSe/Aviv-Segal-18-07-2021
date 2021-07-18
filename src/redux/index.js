import { combineReducers } from "redux";
import productsReducer from "./products/products.reducer";

const reducers = combineReducers({
    products: productsReducer,
})

export default reducers;
