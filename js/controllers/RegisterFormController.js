import BaseController from "./BaseController.js";
import dataService from "../services/DataService.js";

export default class RegisterFormController extends BaseController {
  constructor(element) {
    super(element);
    this.attachEventListener();
  }

  attachEventListener() {
    this.element.addEventListener("submit", async (event) => {
      event.preventDefault();
      const user = {
        username: this.element.elements.username.value,
        password: this.element.elements.password.value,
      };
      this.publish(this.events.START_LOADING);
      try {
        const data = await dataService.register(user);
        window.location.href = "/login.html";
      } catch (error) {
        this.publish(this.events.ERROR, error);
      } finally {
        this.publish(this.events.FINISH_LOADING);
      }
    });
  }
}
