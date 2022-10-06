import { adsList } from './adsListProvider.js';
import { buildAdsListView } from './adsListView.js';

export class AdsListController {
    constructor(nodeElement) {
        this.adsListContainerElement = nodeElement;
        this.loadAds();
    }

    loadAds() {
        try {
            if (adsList.length === 0) {
                this.showNoAds();
            }
            adsList.forEach((ad) => {
                const articleElement = document.createElement('article');
                articleElement.classList.add('ad');
                articleElement.innerHTML = buildAdsListView(ad);
                this.adsListContainerElement.appendChild(articleElement);
            });
        } catch (error) {
            this.errorNotification(error);
        }
    }

    showNoProducts() {
        this.adsListContainerElement.innerHTML = 'No hay anuncios';
    }

    errorNotification(error) {
        this.adsListContainerElement.innerHTML = `Ha habido un error: ${error}`;
    }
}
