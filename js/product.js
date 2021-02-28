import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import ProductController from './controllers/ProductController.js';
import NewProductOrLoginController from './controllers/NewProductOrLoginController.js';
import LogoutController from './controllers/LogoutController.js';
import BuyButtonController from './controllers/BuyButtonController.js';

window.addEventListener('DOMContentLoaded', async (event) => {
    const loader = document.querySelector('.spinner');
    const loaderController = new LoaderController(loader);

    const createProductLink = document.querySelector('.navbar');
    new NewProductOrLoginController(createProductLink);
    
    const logoutLink = document.querySelector('.logout-link');
    new LogoutController(logoutLink);
    
    const element = document.querySelector('.product')
    const productController = new ProductController(element);
    productController.loadProduct();

    const buyButton = document.querySelector('.buy-button');
    new BuyButtonController(buyButton);

    const errorsElement = document.querySelector('.global-errors');
    const errorController = new ErrorController(errorsElement);
})
