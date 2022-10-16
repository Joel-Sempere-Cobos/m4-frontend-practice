import { pubSub } from '../pubsub.js';
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

        const createAdsInputElements = Array.from(
            this.createAdsElement.querySelectorAll('.required')
        );
        const createAdsButtonElement = this.createAdsElement.querySelector('#createAdsButton');

        createAdsInputElements.forEach((createAdsInputElement) => {
            createAdsInputElement.addEventListener('input', () => {
                const areInputsFilled = createAdsInputElements.every(
                    (inputElement) => inputElement.value
                );
                if (areInputsFilled) {
                    createAdsButtonElement.removeAttribute('disabled');
                } else {
                    createAdsButtonElement.setAttribute('disabled', '');
                }
            });
        });
    }

    async createAd() {
        const formData = new FormData(this.createAdsElement);
        const adTitle = formData.get('ad-title');
        const adDescription = formData.get('ad-description');
        const adImg = formData.get('ad-img');
        const adPrice = formData.get('ad-price');
        //TODO radio input COMPRAR VENDER
        //const adBuy = this.createAdsElement.querySelector('#ad-buy').value;
        //const adSell = this.createAdsElement.querySelector('#ad-sell').value;

        /*         const adBuySell = formData.get('ad-buy-sell'); */

        try {
            await createApiAd(adTitle, adDescription, adImg, adPrice);
            pubSub.publish(pubSub.TOPICS.ERROR_NOTIFICATION, 'Anuncio creado con éxito');
            this.createAdsElement.innerHTML = '';
            setTimeout(() => {
                window.location = 'http://127.0.0.1:5500';
            }, 1000);
        } catch (error) {
            pubSub.publish(
                pubSub.TOPICS.ERROR_NOTIFICATION,
                'Algo ha fallado, por favor, vuelve a intentarlo.'
            );
            this.createAdsElement.innerHTML = '';
        }
    }
}
