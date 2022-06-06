import http from "./httpService";
import config from "./config.json";

let urlString = window.location.href;

let url = new URL(urlString);

let access_token = new URLSearchParams(url.search).get("token");

export const resgisterUser = (user) => {
    return http.post(`${config.localapi}/users/register`, JSON.stringify(user));
};

export const loginUser = (user) => {
    return http.post(`${config.localapi}/users/login`, JSON.stringify(user));
};

export const forgetPass = (user) => {
    return http.post(`${config.localapi}/users/forget-password`, JSON.stringify(user));
};

export const resetPass = (user) => {
    return http.post(
        `${config.localapi}/users/reset-password/${access_token}`,
        JSON.stringify(user)
    );
};
