import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';


export default class NewProductOrLoginController extends BaseController {

    constructor(element) {
        super(element);
        this.checkIfUserIsLogged();
    }

    async checkIfUserIsLogged() {
        const usesIsLogged = await dataService.isUserLogged();
        if (usesIsLogged) {
            try {
                const createProduct = this.element.querySelector('.create-product-link');
                createProduct.classList.remove('hidden');
            } catch {}

            try {
                const newProduct = this.element.querySelector('.new-product');
                newProduct.classList.remove('hidden');
            } catch {}
            
            const logout = this.element.querySelector('.logout');
            logout.classList.remove('hidden');

        } else {
            const loginLink = this.element.querySelector('.user-links');
            loginLink.classList.remove('hidden');
            
            try {
                const registerOrLogin = this.element.querySelector('.register-or-login');
                registerOrLogin.classList.remove('hidden');
            } catch {}
        }
    }

}
