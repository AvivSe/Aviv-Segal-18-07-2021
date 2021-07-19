import {SET_CURRENCY, SET_CURRENCY_CONVERSION_RATIO, SET_CURRENCY_CONVERSION_RATE} from "./currency.actions";

const INITIAL_STATE = {
    conversionMap: {ILS: 0, USD: 1},
    rate: 10000,
    selectedCurrency: 'ILS',
    symbolMap: {ILS: '₪', USD: '$'}
};

function currencyReducer(state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case SET_CURRENCY_CONVERSION_RATIO:
            return {...state, conversionMap: {...state.conversionMap, [payload.name]: payload.value}};
        case SET_CURRENCY_CONVERSION_RATE:
            return {...state, conversionMap: {...state.conversionMap, rate: payload}};
        case SET_CURRENCY:
            return {...state, selectedCurrency: payload}
        default:
            return state;
    }
}

export default currencyReducer;
