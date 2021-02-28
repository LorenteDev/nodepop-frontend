import BaseController from "./BaseController.js";
import { confetti } from '../views.js';

export default class BuyController extends BaseController {
  constructor(element) {
    super(element);
    this.attachEventListener();
  }

  attachEventListener() {
    this.element.addEventListener("click", async (event) => {
      const confettiElement = document.querySelector('#confettis');
      confettiElement.innerHTML = confetti;
      setTimeout(function () {
        confettiElement.innerHTML = null
       }, 5000);
    });
  }
}
