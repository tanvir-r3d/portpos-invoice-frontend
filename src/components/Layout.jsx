import {Route, Routes} from "react-router-dom";
import Topbar from "../layouts/Topbar";
import Sidebar from "../layouts/Sidebar";
import OrderList from "./Order/OrderList";
import OrderCreate from "./Order/OrderCreate";
import PrivateComponent from "./PrivateComponent";

const Layout = () => {
    return (
        <>
            <div>
                <Topbar/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar/>
                        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                            <Routes>
                                <Route path="/" element={
                                    <PrivateComponent>
                                        <OrderList/>
                                    </PrivateComponent>
                                }/>
                                <Route path="/create" element={
                                    <PrivateComponent>
                                        <OrderCreate/>
                                    </PrivateComponent>
                                }/>
                            </Routes>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;