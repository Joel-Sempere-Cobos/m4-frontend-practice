import { signupApi, loginApi } from './signup-provider.js';

export class SignupController {
    constructor(nodeElement) {
        this.signupElement = nodeElement;
        this.subscribeToEvents();
    }

    subscribeToEvents() {
        this.signupElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this.validatePassword();
        });

        const signupInputElements = Array.from(this.signupElement.querySelectorAll('input'));
        const signupButtonElement = this.signupElement.querySelector('#signupButton');

        signupInputElements.forEach((signupInputElement) => {
            signupInputElement.addEventListener('input', () => {
                const areInputsFilled = signupInputElements.every(
                    (inputElement) => inputElement.value
                );
                if (areInputsFilled) {
                    signupButtonElement.removeAttribute('disabled');
                } else {
                    signupButtonElement.setAttribute('disabled', '');
                }
            });
        });
    }

    validatePassword() {
        const passwordElement = this.signupElement.querySelector('#password');
        const passwordMinLength = 6;

        if (passwordElement.value.length < passwordMinLength) {
            /* pubSub.publish(
                pubSub.TOPICS.ERROR_NOTIFICATION,
                `La contraseña debe tener más de ${passwordMinLength} caracteres.` 
            );*/
        }

        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);

        if (regExp.test(passwordElement.value)) {
            this.signup();
        } else {
            /* pubSub.publish(
                pubSub.TOPICS.ERROR_NOTIFICATION,
                'La contraseña debe contener mayúsculas, minúsculas o números.'
            ); */
        }
    }

    async signup() {
        const formData = new FormData(this.signupElement);
        const username = formData.get('username');
        const password = formData.get('password');
        try {
            await signupApi(username, password);
            const jwt = await loginApi(username, password);
            localStorage.setItem('token', jwt);

            // hacer cosas
        } catch (error) {
            /* pubSub.publish(pubSub.TOPICS.ERROR_NOTIFICATION, 'El registro o el login han fallado');  */
        }
    }
}
