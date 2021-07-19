export const getAllProducts = ({products: { data }}) => Object.values(data);
export const getArchivedProducts = ({products: { data, archive }}) => Object.values(data).filter(({id}) => archive.has(id));
export const getDeliveryProducts = ({products: { data, archive }}) => Object.values(data).filter(({id}) => !archive.has(id));
export const getIsFetchingProducts = ({products: {loading}}) => loading;
export const getFetchProductsError = ({products: {error}}) => error;
