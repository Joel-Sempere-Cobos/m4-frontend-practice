import { NotificationController } from '../notifications/NotificationController.js';
import { LoginController } from './LoginController.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginElement = document.querySelector('#login-form');
    const loginController = new LoginController(loginElement);

    const notificationElement = document.querySelector('#notification');
    const notificationController = new NotificationController(notificationElement);
});
