import axios from "axios";

// mock data
export const stores = [
    "Amazon",
    "Ebay",
    "Alibaba",
    "AliExpress",
    "Asos",
]

function generateRandomDate() {
    return new Date(+(new Date()) + Math.floor(Math.random() * 10000000000));
}

// Will help simulate an http request or increase a longer fetching time
export function stallTime(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis)
    })
}

export async function fetchProducts() {
    await stallTime(300); // Just simulating a longer request time. for development only.
    return axios.get('https://fakestoreapi.com/products')
        .then(({data}) => data.map((product, i) => ({
                ...product,
                store: stores[i % stores.length],
                deliveryEstimate: generateRandomDate(),
            })
        )).catch(error => error.message);
}
