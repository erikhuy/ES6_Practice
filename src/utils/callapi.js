import { API_URL } from "./../config/index.js"
const callapi = (uri, method = "GET", data) => {
    return axios({
        url: API_URL + uri,
        method,
        data,
    });
}


// const getListProductService = () => {
//     return axios({
//         url: "https://5f67011d38ce8700163980ec.mockapi.io/SanPham",
//         method: "GET",
//     });
// };
// const deleteProductService = (id) => {
//     return axios({
//         url: `https://5f67011d38ce8700163980ec.mockapi.io/SanPham/${id}`,
//         method: "DELETE",

//     });
//     console.log(id)
// };
// const addProductService = (product) => {
//     return axios({
//         url: "https://5f67011d38ce8700163980ec.mockapi.io/SanPham",
//         method: "POST",
//         data: product,
//     });
//     console.log(id)
// };
// const getProductById = (id) => {
//     return axios({
//         url: `https://5f67011d38ce8700163980ec.mockapi.io/SanPham/${id}`,
//         method: "GET",
//     });
//     console.log(id)
// };
// const updateProductService = (product) => {
//     return axios({
//         url: `https://5f67011d38ce8700163980ec.mockapi.io/SanPham`,
//         method: "PUT",
//         data: product,
//     });
// };

export { callapi };