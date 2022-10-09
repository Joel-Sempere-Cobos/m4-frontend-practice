export const buildAdDetails = (ad) => {
    //TODO ajustar tamaño imagen por css y no html
    const adView = `
    <article class="ad">
    <img src="${ad.img}"  width="100px" >
    <p>${ad.title}</p>
    <p>${ad.description}</p>
    <p>Precio: ${ad.price}€</p>
    <p>Anunciante: @${ad.user.username}</p>
    </article>
    <button style="display: none">Borrar anuncio</button>
    `;
    console.log(ad.user);

    return adView;
};
