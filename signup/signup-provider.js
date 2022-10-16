import { sparrestApi } from '../sparrestApi.js';

export const signupApi = async (username, password) => {
    const body = {
        username,
        password,
    };
    const user = await sparrestApi.post(sparrestApi.endpoints.signup, body);
    if (user.username && user.password) {
        return user;
    } else {
        throw new Error('El registro ha fallado.');
    }
};

export const loginApi = async (username, password) => {
    const body = {
        username,
        password,
    };
    const data = await sparrestApi.post(sparrestApi.endpoints.login, body);
    if (data.accessToken) {
        return data.accessToken;
    } else {
        throw new Error('El login ha fallado.');
    }
};
