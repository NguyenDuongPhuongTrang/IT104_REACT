"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
let listProduct = [
    {
        id: "P001",
        name: "Laptop",
        price: 1500,
        category: {
            id: "C001",
            name: "Electronics"
        },
        discount: 10
    },
    {
        id: "P002",
        name: "Smartphone",
        price: 800,
        category: {
            id: "C001",
            name: "Electronics"
        }
    },
    {
        id: "P003",
        name: "Tablet",
        price: 600,
        category: {
            id: "C001",
            name: "Electronics"
        },
        discount: 5
    }
];
const getFinalPrice = (product) => {
    if (product.discount) {
        return product.price - (product.price * product.discount / 100);
    }
    return product.price;
};
const printProductInfo = (product) => {
    const finalPrice = getFinalPrice(product);
    console.log(`Tên: ${product.name}, Giá gốc: $${product.price}, Giá sau giảm: $${finalPrice}, Danh mục: ${product.category.name}`);
};
listProduct.forEach(product => {
    printProductInfo(product);
});
