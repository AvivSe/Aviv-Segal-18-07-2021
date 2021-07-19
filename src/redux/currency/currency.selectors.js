export const getSelectedCurrencyConversionRatio = (
    {
        currency: {
            conversionMap,
            selectedCurrency,
            symbolMap,
        }
    }) => ({
    ratio: conversionMap[selectedCurrency],
    currency: selectedCurrency,
    symbol: symbolMap[selectedCurrency]
});

export const getCurrencyConversionRate = ({currency: {rate}}) => rate;
export const getSelectedCurrency = ({currency: {selectedCurrency, symbolMap}}) => ({name: selectedCurrency, symbol: symbolMap[selectedCurrency]});
