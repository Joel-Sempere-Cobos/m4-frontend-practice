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

            articleElement.addEventListener('click', () => {
                window.location = 'http://127.0.0.1:5500/ad-details.html'; //TODO añadir id y refactorizar
            });
            articleElement.style.cursor = 'pointer';

            const separator = document.createElement('p');
            separator.classList.add('separator');
            this.adsListContainerElement.appendChild(separator);
            separator.innerHTML = '--------------------------'; // TODO sacar esto a la vista
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
