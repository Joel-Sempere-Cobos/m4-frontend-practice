import { getAdById } from './adDetailsProvider.js';
import { buildAdDetails } from './adDetailsView.js';

export class AdDetailsController {
    constructor(nodeElement) {
        this.adDetailsContainerElement = nodeElement;
    }

    async drawAdDetails(adId) {
        try {
            const ad = await getAdById(adId); //TODO refactorizar y sacar al constructor
            //this.ad = ad; Para cuando añada el método remove, etc...
            this.adDetailsContainerElement.innerHTML = buildAdDetails(ad);
            //this.drawRemoveButton();
        } catch (error) {
            this.adDetailsContainerElement.innerHTML = `Ha habido un error: ${error}`;
            //pubSub.publish(pubSub.TOPICS.ERROR_NOTIFICATION, 'No se ha podido cargar el tweet');
        }
    }
}
