import {
    createBrowserRouter
} from "react-router-dom";
import List from "./components/Order/List";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <List />,
    },
]);