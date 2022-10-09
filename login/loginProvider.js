import { sparrestApi } from '../sparrestApi.js';

export const loginApi = async (username, password) => {
    const body = {
        username,
        password,
    };
    const data = await sparrestApi.post(sparrestApi.endpoints.login, body);
    return data.accessToken;
};
