export class ProductsListController {
    constructor(nodeElement) {
        this.productsListContainerElement = nodeElement;
        this.LoadProducts();
    }

    LoadProducts() {
        this.productsListContainerElement.innerHTML = '<h2> a ver si esto funciona </h2>';
    }
}
