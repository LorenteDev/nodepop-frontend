import BaseController from "./BaseController.js";
import dataService from "../services/DataService.js";

export default class LogoutController extends BaseController {
  constructor(element) {
    super(element);
    this.attachEventListener();
    
  }

  attachEventListener() {
    this.element.addEventListener("click", async (event) => {
      const logoutConfirmed = confirm('¿Cerrar sesión?');
      if (logoutConfirmed) {
        this.publish(this.events.START_LOADING);
        try {
          await dataService.logout();
          window.location.href = "/index.html";
        } catch (error) {
          this.publish(this.events.ERROR, error);
        } finally {
          this.publish(this.events.FINISH_LOADING);
        }
      }
    });
  }
}
