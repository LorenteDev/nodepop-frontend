import BaseController from './BaseController.js'
import { productListView, noProducts } from '../views.js';
import dataService from '../services/DataService.js'

export default class ProductsListController extends BaseController {
    
    constructor(element) {
        super(element);
        this.subscribe(this.events.SEARCH, query => {
            this.loadProducts(query);
        });
    }

    render(products) {
        this.element.innerHTML = '';
        if (products.length > 0) {
            for (const product of products) {
                const article = document.createElement('article');
                article.innerHTML = productListView(product);
                this.element.appendChild(article);
            }
        } else {
            const article = document.createElement('article');
            article.innerHTML = noProducts()
            this.element.appendChild(article);
        }
    }

    async loadProducts(query=null) {
        this.publish(this.events.START_LOADING, {});
        try {
            const products = await dataService.getProducts(query);
            this.render(products);
        } catch (error) {
            console.error(error);
            this.publish(this.events.ERROR, error);
        } finally {
            this.publish(this.events.FINISH_LOADING, {});
        }
    }
}