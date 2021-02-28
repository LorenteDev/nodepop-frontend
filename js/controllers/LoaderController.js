import BaseController from './BaseController.js';

export default class LoaderController extends BaseController {

    constructor(element) {
        super(element);
        this.subscribe(this.events.START_LOADING, () => {
            this.showLoading();
        });
        this.subscribe(this.events.FINISH_LOADING, () => {
            this.hideLoading();
        });
    }

    showLoading() {
        if (this.element.classList.contains('btn')) {
            this.element.classList.add('disabled');
        }

        if (this.element.classList.contains('spinner')) {
            this.element.classList.remove('hidden');
        }
    }

    hideLoading() {
        if (this.element.classList.contains('btn')) {
            this.element.classList.remove('disabled');
        }

        if (this.element.classList.contains('spinner')) {
            this.element.classList.add('hidden');
        }
    }

}
