import { getAds } from './adsListProvider.js';
import { buildAdsListView, buildAdsListLoader } from './adsListView.js';

export class AdsListController {
    constructor(nodeElement) {
        this.adsListContainerElement = nodeElement;
        this.loadAds();
    }

    async loadAds() {
        this.adsListContainerElement.innerHTML = buildAdsListLoader();
        const adsList = await getAds();

        if (adsList.length === 0) {
            this.showNoAds();
        }

        for (let ad of adsList) {
            const articleElement = document.createElement('article');
            articleElement.classList.add('ad');
            articleElement.innerHTML = buildAdsListView(ad);
            this.adsListContainerElement.appendChild(articleElement);
        }

        this.adsListContainerElement.querySelector('.loader-container').classList.toggle('hide');
    }

    showNoAds() {
        this.adsListContainerElement.innerHTML = 'No hay anuncios';
    }

    errorNotification(error) {
        this.adsListContainerElement.innerHTML = `Ha habido un error: ${error}`;
    }
}
