import axios from "axios";

const productsApi = axios.create({
    baseURL: "https://dummyjson.com"
})

export async function getAllProducts() {
    const apiResponse = await productsApi.get('/products?limit=0');
    const { data: { products } } = apiResponse;
    return products;
}