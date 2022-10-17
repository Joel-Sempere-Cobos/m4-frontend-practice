import { sparrestApi } from '../sparrestApi.js';

export async function getAds() {
    const endpoint = `${sparrestApi.endpoints.ads}?_expand=user`;
    const ads = await sparrestApi.get(endpoint);
    if (ads) {
        return ads;
    } else {
        throw new Error('Ha fallado la carga de anuncios.');
    }
}
