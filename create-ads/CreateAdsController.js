import { createApiAd } from './createAdsProvider.js';

export class CreateAdsController {
    constructor(nodeElement) {
        this.createAdsElement = nodeElement;
        this.subscribeToEvents();
    }

    subscribeToEvents() {
        this.createAdsElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this.createAd();
        });
    }

    createAd() {
        const formData = new FormData(this.createAdsElement);
        const adTitle = formData.get('ad-title');
        const adDescription = formData.get('ad-description');
        const adImg = formData.get('ad-img');
        const adPrice = formData.get('ad-price');
        //TODO radio input COMPRAR VENDER
        //const adBuy = this.createAdsElement.querySelector('#ad-buy').value;
        //const adSell = this.createAdsElement.querySelector('#ad-sell').value;

        const adBuySell = formData.get('ad-buy-sell');
        createApiAd(adTitle, adDescription, adImg, adPrice);
        /* setTimeout(() => {
            window.location = 'http://127.0.0.1:5500';
        }, 2000); */
    }
}
