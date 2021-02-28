import BaseController from "./BaseController.js";
import dataService from "../services/DataService.js";

export default class NewProductFormController extends BaseController {

    constructor(element) {
        super(element);
        this.checkIfUserIsLogged();
        this.attachEventListeners();
    }

    async checkIfUserIsLogged() {
        const userIsLogged = await dataService.isUserLogged();
        if (!userIsLogged) {
            window.location.href = '/login.html?next=/new-product.html';
        } else {
            this.publish(this.events.FINISH_LOADING);
        }
    }

    attachEventListeners() {
        this.element.addEventListener('submit', async event => {
            event.preventDefault();
            const product = {
                name: this.element.elements.name.value,
                description: this.element.elements.description.value,
                price: this.element.elements.price.value,
                selling: this.element.elements.selling.checked,
                image: null
            }
            if (this.element.elements.image !== null && this.element.elements.image.files.length > 0) {
                product.image = this.element.elements.image.files[0];
            }

            this.publish(this.events.START_LOADING);
            try {
                await dataService.saveProduct(product);
                window.location.href = '/index.html'
            } catch (error) {
                this.publish(this.events.ERROR, error)
            } finally {
                this.publish(this.events.FINISH_LOADING)
            }
        });
    }

}
