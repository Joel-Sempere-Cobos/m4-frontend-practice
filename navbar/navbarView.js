export const buildLoguedNavbar = () => {
    return `<nav class="navbar">
        <a href="http://127.0.0.1:5500/create-ads.html">Crear anuncio</a>
        <a id="logout" href=""> Desconectar </a>
        </nav>
        `;
};

export const builtNotLoguedNavbar = () => {
    return `
    <nav class="navbar">
    <a href="http://127.0.0.1:5500/login.html">Acceder</a>
    <a href="http://127.0.0.1:5500/signup.html">Registrarse</a>
    </nav>
    `;
};
