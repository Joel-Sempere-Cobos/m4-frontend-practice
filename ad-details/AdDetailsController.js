import { decodeToken } from '../utils/decodeToken.js';
import { getAdById } from './adDetailsProvider.js';
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
            this.drawRemoveButton();
        } catch (error) {
            this.adDetailsContainerElement.innerHTML = `Ha habido un error: ${error}`;
            //pubSub.publish(pubSub.TOPICS.ERROR_NOTIFICATION, 'No se ha podido cargar el tweet');
        }
    }

    drawRemoveButton() {
        const token = localStorage.getItem('token');
        if (token) {
            const tokenData = decodeToken(token);
            if (tokenData.userId === this.adOwnerId) {
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
                alert('Tweet borrado exitosamente');
                window.location = '/';
            } catch (error) {
                //pubSub.publish(pubSub.TOPICS.ERROR_NOTIFICATION, 'Error borrando el tweet');
            }
        }
    }
}
