import BaseController from "./BaseController.js";
import dataService from "../services/DataService.js";
import { noProduct } from '../views.js';
import DeleteButtonController from '../controllers/DeleteButtonController.js'
import LogoutController from "./LogoutController.js";

export default class ProductController extends BaseController {
  constructor(element) {
    super(element);
    this.subscribe(this.events.PRODUCT_DELETED, ev => {
      this.loadProduct(null);
    });
  }

  render(product, user) {
    if (product) {
      const name = document.querySelector('.product-name');
      const description = document.querySelector('.product-description');
      const price = document.querySelector('.product-price');
      const selling = document.querySelector('.product-selling');
      document.querySelector('.product-image').src = product.image ? product.image : dataService.BASE_URL+'//placeholder.jpg';
      name.innerHTML = product.name;
      description.innerHTML = product.description;
      price.innerHTML = `${product.price}€`;
      selling.innerHTML = product.selling ? 'En venta' : 'Se compra';

      if(product.description) {
        const descriptionHr = document.querySelector('.description-hr');
        descriptionHr.classList.remove('hidden');
      }

      if (user && (user.userId === product.userId)) {
        const removeButton = document.querySelector('.remove-button');
        removeButton.classList.remove('hidden');
        new DeleteButtonController(removeButton, product);
      } else {
        const buyButton = document.querySelector('.buy-button');
        buyButton.classList.remove('hidden');
        buyButton.innerHTML = product.selling ? 'Comprar' : 'Vender';
      }

    } else {
      const article = document.createElement('article');
      article.innerHTML = noProduct()
      this.element.appendChild(article);
    }
  }

  async loadProduct(query = null) {
    this.publish(this.events.START_LOADING, {});
    try {
      const id = location.search.split('?')[1];
      const product = await dataService.getProduct(id);
      let user = null
      try {
        user = await dataService.getUser()
      } catch {}
      finally {
        this.render(product, user);
      }
    } catch (error) {
      console.error(error);
      this.publish(this.events.ERROR, error);
    } finally {
      this.publish(this.events.FINISH_LOADING, {});
    }
  }
}
