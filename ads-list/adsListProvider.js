import { sparrestApi } from '../sparrestApi.js';

export async function getAds() {
    const endpoint = `${sparrestApi.endpoints.ads}?_expand=user`;
    const ads = await sparrestApi.get(endpoint);
    return ads;
}
