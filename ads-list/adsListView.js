export const buildAdsListView = (ad) => {
    const adView = `
    <img src="${ad.img}">
    <p>${ad.title}</p>
    <p>${ad.description}</p>
    <p>Precio: ${ad.price}€</p>
    `;
    return adView;
};

export const buildAdsListLoader = () => {
    return `
    <div class="loader-container"><span class="loader"></span></div>
    `;
};
