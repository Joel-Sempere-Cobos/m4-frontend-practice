import { pubSub } from '../pubsub.js';
import { decodeToken } from '../utils/decodeToken.js';
import { getAdById, removeAdById } from './adDetailsProvider.js';
import { buildAdDetails } from './adDetailsView.js';

export class AdDetailsController {
    constructor(nodeElement) {
        this.adDetailsContainerElement = nodeElement;
    }

    async drawAdDetails(adId) {
        try {
            const ad = await getAdById(adId);
            this.ad = ad;
            this.adDetailsContainerElement.innerHTML = buildAdDetails(ad);
            this.drawRemoveButton(ad.userId);
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.ERROR_NOTIFICATION, 'No se ha podido cargar el anuncio');
        }
    }

    drawRemoveButton(adOwnerId) {
        const token = localStorage.getItem('token');
        if (token) {
            const tokenData = decodeToken(token);
            if (tokenData.userId === adOwnerId) {
                const removeButton = this.adDetailsContainerElement.querySelector('button');
                removeButton.style.display = 'block';
                removeButton.addEventListener('click', this.removeAd());
            }
        }
    }

    async removeAd() {
        const response = window.confirm('¿Seguro que quieres borrar el anuncio?');
        if (response) {
            try {
                await removeAdById(this.ad.id);
                alert('Anuncio borrado exitosamente');
                window.location = '/';
            } catch (error) {
                pubSub.publish(pubSub.TOPICS.ERROR_NOTIFICATION, 'Error borrando el anuncio');
            }
        }
    }
}
