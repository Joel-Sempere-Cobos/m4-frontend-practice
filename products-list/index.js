import { ProductsListController } from './ProductsListController.js';

document.addEventListener('DOMContentLoaded', () => {
    // Conecto controladores
    const productsListContainerElement = document.querySelector('#products-list-container');
    const productsListController = new ProductsListController(productsListContainerElement);
});
