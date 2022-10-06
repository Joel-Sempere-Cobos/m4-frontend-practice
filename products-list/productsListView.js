export const buildProductsListView = (product) => {
    const productView = `
    <p>${product.img}</p>
    <p>${product.productName}</p>
    <p>${product.description}</p>
    <p>${product.price}</p>
    <p>--------------------------</p>
    
    `;

    return productView;
};
