import { pubSub } from '../pubsub.js';
import { decodeToken } from '../utils/decodeToken.js';
import { getAdById, removeAdById } from './adDetailsProvider.js';
import { buildAdDetails, buildAdsListLoader } from './adDetailsView.js';

export class AdDetailsController {
    constructor(nodeElement) {
        this.adDetailsElement = nodeElement;
    }

    async drawAdDetails(adId) {
        this.adDetailsElement.innerHTML = buildAdsListLoader();

        try {
            const ad = await getAdById(adId);
            this.ad = ad;
            this.adDetailsElement.innerHTML = buildAdDetails(ad);
            this.drawRemoveButton(ad.userId, ad.id);
        } catch (error) {
            this.adDetailsElement.innerHTML = '';
            pubSub.publish(pubSub.TOPICS.ERROR_NOTIFICATION, 'No se ha podido cargar el anuncio.');
        }
    }

    drawRemoveButton(adOwnerId, adId) {
        const token = localStorage.getItem('token');
        if (token) {
            const tokenData = decodeToken(token);
            if (tokenData.userId === adOwnerId) {
                const removeButton = this.adDetailsElement.querySelector('button');
                removeButton.style.display = 'block';
                removeButton.addEventListener('click', () => {
                    this.removeAd(adId);
                });
            }
        }
    }

    async removeAd(adId) {
        const response = window.confirm('¿Seguro que quieres borrar el anuncio?');
        if (response) {
            try {
                await removeAdById(adId);
                alert('Anuncio borrado exitosamente');
                window.location = '/';
            } catch (error) {
                pubSub.publish(pubSub.TOPICS.ERROR_NOTIFICATION, 'Error borrando el anuncio');
            }
        }
    }
}
