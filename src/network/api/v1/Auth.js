import http from "../../interceptors/v1/http";

export const submitLogin = data => {
    return http.post(`/login`, data);
}