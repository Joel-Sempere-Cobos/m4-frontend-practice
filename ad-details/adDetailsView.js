export const buildAdDetails = (ad) => {
    const adView = `
    <article class="ad">
    <img src="${ad.img}">
    <p>${ad.title}</p>
    <p>${ad.description}</p>
    <p>Precio: ${ad.price}€</p>
    <p>Anunciante: @${ad.user.username}</p>
    <button style="display: none">Borrar anuncio</button>
    </article>
    `;

    return adView;
};
