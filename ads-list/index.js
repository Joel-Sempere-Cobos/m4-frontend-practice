import { AdsListController } from './AdsListController.js';
import { NotificationController } from '../notifications/NotificationController.js';
import { NavbarController } from '../navbar/NavbarController.js';

document.addEventListener('DOMContentLoaded', () => {
    // Conecto controladores
    const adsListContainerElement = document.querySelector('#ads-list-container');
    const adsListController = new AdsListController(adsListContainerElement);

    const notificationElement = document.querySelector('#notification');
    const notificationController = new NotificationController(notificationElement);

    const navbarElement = document.querySelector('#navbar-container');
    const navbarController = new NavbarController(navbarElement);
});
