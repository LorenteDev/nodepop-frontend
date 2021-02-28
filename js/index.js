import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import ProductsListController from './controllers/ProductsListController.js';
import NewProductOrLoginController from './controllers/NewProductOrLoginController.js';
import LogoutController from './controllers/LogoutController.js';

window.addEventListener('DOMContentLoaded', async (event) => {
    const loader = document.querySelector('.spinner');
    const loaderController = new LoaderController(loader);

    const logoutLink = document.querySelector('.logout-link');
    new LogoutController(logoutLink);
    
    const element = document.querySelector('.products-list');
    const controller = new ProductsListController(element);
    controller.loadProducts();

    const createProductLink = document.querySelector('.navbar');
    new NewProductOrLoginController(createProductLink);

    const errorsElement = document.querySelector('.global-errors');
    const errorController = new ErrorController(errorsElement);
})
