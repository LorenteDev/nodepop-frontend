import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import LoginFormController from './controllers/LoginFormController.js';

window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.spinner');
    const loaderController = new LoaderController(loader);

    const button = document.querySelector('.btn');
    const buttonController = new LoaderController(button);

    const errorsElement = document.querySelector('.global-errors');
    const errorController = new ErrorController(errorsElement);

    const formElement = document.querySelector('form');
    new LoginFormController(formElement);
});
