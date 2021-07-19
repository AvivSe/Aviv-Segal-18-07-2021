import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PurchaseByItem from "./purchase-by-item/PurchaseByItem";
import PurchaseByStore from "./purchase-by-stores/PurchaseByStore";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "./redux/products/products.actions";
import {useEffect} from "react";
import {getFetchProductsError, getIsFetchingProducts} from "./redux/products/products.selectors";
import {getCurrencyConversionRate, getSelectedCurrency} from "./redux/currency/currency.selectors";
import {setCurrencyConversionRatio} from "./redux/currency/currency.actions";

function App() {
    const dispatch = useDispatch();
    const isFetchingProducts = useSelector(getIsFetchingProducts);
    const fetchingProductsError = useSelector(getFetchProductsError);
    const currencyConversionRate = useSelector(getCurrencyConversionRate)
    const selectedCurrency = useSelector(getSelectedCurrency);

    useEffect(function () {
        if(selectedCurrency.name === 'USD') { // We converts usd, no need to polling this case
            dispatch(setCurrencyConversionRatio({name: 'ILS', value: Math.random() + 2.8}));
            const intervalId = setInterval(function () {
                dispatch(setCurrencyConversionRatio({name: 'ILS', value: Math.random() + 2.8}));
            }, Number(currencyConversionRate));

            return function () {
                clearInterval(intervalId);
            }
        }
    }, [selectedCurrency.name, currencyConversionRate, dispatch])


    useEffect(function () {
        dispatch(fetchProducts())
    }, [dispatch]);

    if (isFetchingProducts) {
        return "Fetching products..."
    }

    if (fetchingProductsError) {
        return fetchingProductsError;
    }

    return <Router>
        <div>
            <Header/>
            <Switch>
                <Route path={'/stores'}><PurchaseByStore/></Route>
                <Route path={'/'}><PurchaseByItem/></Route>
            </Switch>
        </div>
    </Router>;
}

export default App;
