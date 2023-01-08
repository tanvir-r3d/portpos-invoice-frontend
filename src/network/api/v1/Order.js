import http from "../../interceptors/v1/http";

export const submitOrder = data => {
    return http.post(`/orders`, data);
}

export const fetchOrder = () => {
    return http.get(`/orders`);
}

export const orderStatus = (id, status) => {
    return http.patch(`/orders/status/${id}/${status}`);
}

export const orderIPN = id => {
    return http.get(`/orders/ipn/${id}`);
}
