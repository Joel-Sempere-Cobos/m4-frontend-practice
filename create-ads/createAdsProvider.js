import { sparrestApi } from '../sparrestApi.js';

export const createApiAd = async (adTitle, adDescription, adImg, adPrice /*  adBuy, adSell */) => {
    await sparrestApi.post(sparrestApi.endpoints.ads, {
        title: adTitle,
        description: adDescription,
        img: adImg,
        price: adPrice,
        /* buyBuy: adBuy,
        buySell: adSell, */
    });
};
