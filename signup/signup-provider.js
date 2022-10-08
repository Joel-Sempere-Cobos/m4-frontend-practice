import { sparrestApi } from '../sparrestApi.js';

export const signupApi = async (username, password) => {
    const body = {
        username,
        password,
    };
    await sparrestApi.post(sparrestApi.endpoints.signup, body);
};

export const loginApi = async (username, password) => {
    const body = {
        username,
        password,
    };
    const data = await sparrestApi.post(sparrestApi.endpoints.login, body);
    return data.accessToken;
};
