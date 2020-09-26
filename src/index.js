import { callapi } from "./utils/callapi.js";
import Product from "./models/product.js";
window.deleteProduct = deleteProduct;


const renderHTML = () => {
    const contentHTML = `
        <div class="card text-white bg-dark">
            <div class="card-body">
                <h4 class="card-title">Danh sách sản phẩm</h4>
                <div class='container'>
                    <div class="row">
                        <div class="col-md-3">
                            <input id="maSP" class="form-control" placeholder="Mã SP" disabled />
                        </div>
                        <div class="col-md-3">
                            <input id="tenSP" class="form-control" placeholder="Tên SP" />
                        </div>
                        <div class="col-md-3">
                            <input id="gia" class="form-control" placeholder="Giá" />
                        </div>
                        <div class="col-md-3">
                            <input id="hinhAnh" class="form-control" placeholder="Link hình" />
                        </div>
                    </div>
                    <br />
                    <button id="btnThem" class="btn btn-success">Thêm sản phẩm</button>
                    <button id="btnCapNhat" class="btn btn-success">Cap nhat</button>
                </div>
            </div>
        </div>
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Giá </th>
                        <th>Hình ảnh</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="tblDanhSachSanPham">

                </tbody>
            </table>
        </div>
    `;
    document.getElementById("root").innerHTML = contentHTML;
}

const renderTable = (listProduct) => {
    if (listProduct && listProduct.length > 0) {
        let contentHTML = ""
        listProduct.map((product) => {
            contentHTML += `
            <tr>
            <td>${product.id}</td>
            <td>${product.tenSP}</td>
            <td>${product.gia}</td>
            <td>
                <img src="${product.hinhAnh}" width="150px">
            </td>
            <td>
            <button class="btn btn-info" onClick="editProduct('${product.id}')">EDIT</button>
            <button class="btn btn-danger" onClick="deleteProduct('${product.id}')">DELETE</button>
            </td>
            </tr>`
        })
        return contentHTML;
    }
}


const renderListProduct = () => {
    callapi("SanPham", "GET", null)
        .then((result) => {
            document.getElementById("tblDanhSachSanPham").innerHTML = renderTable(result.data);
            console.log(result.data);
        })
        .catch()
}

renderListProduct();
renderHTML();

function deleteProduct(id) {
    console.log(id);
    deleteProductService(id)
        .then((result) => {
            alert("Success")
            renderListProduct();
        })
        .catch()
}
window.editProduct = editProduct;

function editProduct(id) {
    getProductById(id)
        .then((result) => {
            const id = document.getElementById("maSP").value
            const ten = document.getElementById("tenSP").value
            const gia = document.getElementById("gia").value
            const hinhAnh = document.getElementById("hinhAnh").value

            const product = new Product(id, ten, gia, hinhAnh);
            updateProductService(product)
                .then(() => {
                    alert("Success")
                    renderListProduct();
                })
                .catch()
        })
        .catch()
}


document.getElementById("btnThem").onclick = function() {
    const ten = document.getElementById("tenSP").value
    const gia = document.getElementById("gia").value
    const hinhAnh = document.getElementById("hinhAnh").value

    const product = new Product(ten, gia, hinhAnh)
    addProductService(product)
        .then(() => {
            alert("Success")
            renderListProduct();
        })
        .catch()
    console.log(product);
}