import { productsList } from './productsListProvider.js';
import { buildProductsListView } from './productsListView.js';

export class ProductsListController {
    constructor(nodeElement) {
        this.productsListContainerElement = nodeElement;
        this.LoadProducts();
    }

    LoadProducts() {
        if (productsList.length === 0) {
            this.showNoProducts();
        }
        productsList.forEach((product) => {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = buildProductsListView(product);
            this.productsListContainerElement.appendChild(articleElement);
        });
    }

    showNoProducts() {
        this.productsListContainerElement.innerHTML = 'No hay productos';
    }
}
