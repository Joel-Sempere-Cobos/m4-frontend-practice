import { SignupController } from './SignupController.js';

document.addEventListener('DOMContentLoaded', () => {
    const signupElement = document.querySelector('#signup-form');
    const signupController = new SignupController(signupElement);
});
