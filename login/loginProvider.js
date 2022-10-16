import { sparrestApi } from '../sparrestApi.js';

export const loginApi = async (username, password) => {
    const body = {
        username,
        password,
    };
    const data = await sparrestApi.post(sparrestApi.endpoints.login, body);
    if (data.accessToken) {
        return data.accessToken;
    } else {
        throw new Error('Acceso fallido.');
    }
};
