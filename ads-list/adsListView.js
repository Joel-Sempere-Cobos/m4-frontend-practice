export const buildAdsListView = (ad) => {
    //TODO ajustar tamaño imagen por css y no html
    const adView = `
    <img src="${ad.img}"  width="100px" >
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
