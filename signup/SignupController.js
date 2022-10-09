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
        // const passwordMinLength = 6;
        const regExp = new RegExp(/^(?=(?:.*\d))(?=(?:.*[A-Z]))(?=(?:.*[a-z]))\S{6,}$/); // Buscar manera de incrustar y no hardcodear el mínimo de caracteres

        if (regExp.test(passwordElement.value)) {
            this.signup();
        } else {
            /* pubSub.publish(
                pubSub.TOPICS.ERROR_NOTIFICATION,
                `La contraseña debe tener más de ${passwordMinLength} caracteres.` 
            );*/
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

            // TODO que te loguee si ya estás registrado y te registre si no lo estás
        } catch (error) {
            /* pubSub.publish(pubSub.TOPICS.ERROR_NOTIFICATION, 'El registro o el login han fallado');  */
        }
    }
}
