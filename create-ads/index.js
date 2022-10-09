import { NotificationController } from '../notifications/NotificationController.js';
import { pubSub } from '../pubsub.js';
import { CreateAdsController } from './CreateAdsController.js';

document.addEventListener('DOMContentLoaded', () => {
    const userCheckLogged = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            pubSub.publish(alert('¡Intruso!. Por favor, inicia sesión.'));
            window.location = '/login.html';
        }
    };

    const notificationElement = document.querySelector('#notification');
    const notificationController = new NotificationController(notificationElement);

    const createAdsContainerElement = document.querySelector('#create-ads-form');
    const createadsController = new CreateAdsController(createAdsContainerElement);

    userCheckLogged();
});
