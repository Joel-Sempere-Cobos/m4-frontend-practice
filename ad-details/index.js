import { AdDetailsController } from './AdDetailsController.js';

document.addEventListener('DOMContentLoaded', async () => {
    const adDetailsElement = document.querySelector('#ad-details-container');
    const adDetailsController = new AdDetailsController(adDetailsElement);

    // ID y pintar
    const params = new URLSearchParams(location.search);
    const adId = params.get('id');
    await adDetailsController.drawAdDetails(adId);
});
