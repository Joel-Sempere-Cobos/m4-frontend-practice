import { pubSub } from '../pubsub.js';
import { sparrestApi } from '../sparrestApi.js';

export const getAdById = async (adId) => {
    const ad = await sparrestApi.get(`${sparrestApi.endpoints.ads}/${adId}?_expand=user`);
    if (ad) {
        return ad;
    } else {
        pubSub.publish(pubSub.TOPICS.ERROR_NOTIFICATION, 'No hay ningún anuncio con este ID');
    }
};

export const removeAdById = async (adId) => {
    await sparrestApi.delete(`${sparrestApi.endpoints.ads}/${adId}`);
};
