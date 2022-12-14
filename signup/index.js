import { NotificationController } from '../notifications/NotificationController.js';
import { SignupController } from './SignupController.js';

document.addEventListener('DOMContentLoaded', () => {
    const signupElement = document.querySelector('#signup-form');
    const signupController = new SignupController(signupElement);

    const notificationElement = document.querySelector('#notification');
    const notificationController = new NotificationController(notificationElement);
});
