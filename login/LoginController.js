import { pubSub } from '../pubsub.js';
import { loginApi } from './loginProvider.js';

export class LoginController {
    constructor(nodeElement) {
        this.loginElement = nodeElement;
        this.subscribeToEvents();
    }

    subscribeToEvents() {
        this.loginElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this.validatePassword();
        });

        const loginInputElements = Array.from(this.loginElement.querySelectorAll('input'));
        const loginButtonElement = this.loginElement.querySelector('#loginButton');

        loginInputElements.forEach((loginInputElement) => {
            loginInputElement.addEventListener('input', () => {
                const areInputsFilled = loginInputElements.every(
                    (inputElement) => inputElement.value
                );
                if (areInputsFilled) {
                    loginButtonElement.removeAttribute('disabled');
                } else {
                    loginButtonElement.setAttribute('disabled', '');
                }
            });
        });
    }

    validatePassword() {
        const passwordElement = this.loginElement.querySelector('#password');
        const passwordMinLength = 6;
        const regExp = new RegExp(/^(?=(?:.*\d))(?=(?:.*[A-Z]))(?=(?:.*[a-z]))\S{6,}$/); // Buscar manera de incrustar y no hardcodear el mínimo de caracteres

        if (regExp.test(passwordElement.value)) {
            this.login();
        } else {
            pubSub.publish(
                pubSub.TOPICS.ERROR_NOTIFICATION,
                `La contraseña debe tener más de ${passwordMinLength} caracteres y contener mayúsculas, minúsculas y números.`
            );
        }
    }

    async login() {
        const formData = new FormData(this.loginElement);
        const username = formData.get('username');
        const password = formData.get('password');

        try {
            const jwt = await loginApi(username, password);
            localStorage.setItem('token', jwt);
            pubSub.publish(pubSub.TOPICS.ERROR_NOTIFICATION, 'Acceso confirmado');
            this.loginElement.innerHTML = '';

            setTimeout(() => {
                window.location = '/';
            }, 1000);
        } catch (error) {
            pubSub.publish(
                pubSub.TOPICS.ERROR_NOTIFICATION,
                'Acceso fallido. Por favor, verifica usuario y contraseña.'
            );
        }
    }
}
