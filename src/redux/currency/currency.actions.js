export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_CURRENCY_CONVERSION_RATIO = 'SET_CURRENCY_CONVERSION_RATIO';
export const SET_CURRENCY_CONVERSION_RATE = 'SET_CURRENCY_CONVERSION_RATE';

export const setCurrencyConversionRatio = payload => {
    return {type: SET_CURRENCY_CONVERSION_RATIO, payload }
}
export const setCurrencyConversionRate = payload => {
    return {type: SET_CURRENCY_CONVERSION_RATE, payload }
}

export const setCurrency = payload => {
    return {type: SET_CURRENCY, payload }
}
