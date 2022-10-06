import { ProductsListController } from './ProductsListController.js';

document.addEventListener('DOMContentLoaded', () => {
    // Conecto controladores
    const productsListElement = document.querySelector('products-list-container');
    const productsListController = new ProductsListController(productsListElement);
});
