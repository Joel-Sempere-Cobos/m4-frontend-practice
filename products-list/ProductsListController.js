import { productsList } from './productsListProvider.js';
import { buildProductsListView } from './productsListView.js';

export class ProductsListController {
    constructor(nodeElement) {
        this.productsListContainerElement = nodeElement;
        this.LoadProducts();
    }

    LoadProducts() {
        productsList.forEach((product) => {
            const articleElement = document.createElement('article');

            articleElement.innerHTML = buildProductsListView(product);

            this.productsListContainerElement.appendChild(articleElement);
        });
    }
}
