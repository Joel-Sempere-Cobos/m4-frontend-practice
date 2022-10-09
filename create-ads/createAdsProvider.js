import { sparrestApi } from '../sparrestApi.js';

export const createApiAd = (adTitle, adDescription, adImg, adPrice, adBuySell) => {
    sparrestApi.post(sparrestApi.endpoints.ads, {
        title: adTitle,
        description: adDescription,
        img: adImg,
        price: adPrice,
        buySell: adBuySell,
    });
};
