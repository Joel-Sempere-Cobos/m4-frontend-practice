import { CreateAdsController } from './CreateAdsController.js';

document.addEventListener('DOMContentLoaded', () => {
    const createAdsContainerElement = document.querySelector('#create-ads-form');
    const createadsController = new CreateAdsController(createAdsContainerElement);
});
