import { buildLoguedNavbar, builtNotLoguedNavbar } from './navbarView.js';

export class NavbarController {
    constructor(nodeElement) {
        this.navbarElement = nodeElement;
        this.navbarCreator();
    }

    navbarCreator() {
        const jwt = localStorage.getItem('token');

        if (jwt) {
            this.navbarElement.innerHTML = buildLoguedNavbar();
            const logout = this.navbarElement.querySelector('#logout');
            logout.addEventListener('click', () => {
                localStorage.removeItem('token');
                location.reload();
            });
        } else {
            this.navbarElement.innerHTML = builtNotLoguedNavbar();
        }
    }
}
