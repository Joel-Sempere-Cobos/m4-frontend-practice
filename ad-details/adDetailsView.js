export const buildAdDetails = (ad) => {
    //TODO ajustar tamaño imagen por css y no html
    const adView = `
    <article class="ad">
    <img src="${ad.img}"  width="100px" >
    <p>${ad.adTitle}</p>
    <p>${ad.description}</p>
    <p>Precio: ${ad.price}€</p>
    </article>
    `;

    return adView;
};
