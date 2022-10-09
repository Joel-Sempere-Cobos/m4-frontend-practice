import { sparrestApi } from '../sparrestApi.js';

export const createApiAd = (adTitle, adDescription, adImg, adPrice /*  adBuy, adSell */) => {
    sparrestApi.post(sparrestApi.endpoints.ads, {
        title: adTitle,
        description: adDescription,
        img: adImg,
        price: adPrice,
        /* buyBuy: adBuy,
        buySell: adSell, */
    });
};
