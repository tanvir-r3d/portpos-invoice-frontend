import http from "../../interceptors/v1/http";

export const submitOrder = data => {
    return http.post(`/orders`, data);
}
