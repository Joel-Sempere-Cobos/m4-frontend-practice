import { sparrestApi } from '../sparrestApi.js';

export const getAdById = async (adId) => {
    const ad = await sparrestApi.get(`${sparrestApi.endpoints.ads}/${adId}`); // TODO ?_expand=user
    return ad;
};

/* export const removeAdById = async (adId) => {
    await sparrestApi.delete(`${sparrestApi.endpoints.ads}/${adId}`);
}; */
