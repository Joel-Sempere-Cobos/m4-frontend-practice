import { sparrestApi } from '../sparrestApi.js';

export const signupApi = async (username, password) => {
    const body = {
        username,
        password,
    };
    await sparrestApi.post(sparrestApi.endpoints.signup, body);
};
