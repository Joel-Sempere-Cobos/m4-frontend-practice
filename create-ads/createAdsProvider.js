import { sparrestApi } from '../sparrestApi.js';

export const createApiAd = async (adTitle, adDescription, adImg, adPrice, adBuySell) => {
    await sparrestApi.post(sparrestApi.endpoints.ads, {
        title: adTitle,
        description: adDescription,
        img: adImg,
        price: adPrice,
        buy_or_sell: adBuySell,
    });
};
