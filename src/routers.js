import {createBrowserRouter} from "react-router-dom";
import OrderList from "./components/Order/OrderList";
import OrderCreate from "./components/Order/OrderCreate";


export const router = createBrowserRouter([
    {
        path: "/orders",
        element: <OrderList/>,
    },
    {
        path: "/orders/create",
        element: <OrderCreate/>,
    },
]);