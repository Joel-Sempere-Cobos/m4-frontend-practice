import { AdsListController } from './AdsListController.js';

document.addEventListener('DOMContentLoaded', () => {
    // Conecto controladores
    const adsListContainerElement = document.querySelector('#ads-list-container');
    const adsListController = new AdsListController(adsListContainerElement);
});
