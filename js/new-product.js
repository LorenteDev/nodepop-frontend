import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import NewProductOrLoginController from './controllers/NewProductOrLoginController.js';
import NewProductFormController from './controllers/NewProductFormController.js';
import LogoutController from './controllers/LogoutController.js';

window.addEventListener('DOMContentLoaded', async (event) => {
    const loader = document.querySelector('.spinner');
    const loaderController = new LoaderController(loader);
    
    const button = document.querySelector('.btn');
    const buttonController = new LoaderController(button);
    
    const createProductLink = document.querySelector('.new-product-body');
    new NewProductOrLoginController(createProductLink);

    const logoutLink = document.querySelector('.logout-link');
    new LogoutController(logoutLink);

    const newProductForm = document.querySelector('form');
    new NewProductFormController(newProductForm);

    const errorsElement = document.querySelector('.global-errors');
    const errorController = new ErrorController(errorsElement);
})
