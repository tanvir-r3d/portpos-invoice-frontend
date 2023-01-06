import {RouterProvider} from "react-router-dom";
import Topbar from "../layouts/Topbar";
import Sidebar from "../layouts/Sidebar";
import {router} from "../routers";

const Layout = () => {
    return (
        <>
            <div>
                <Topbar/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar/>
                        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                            <RouterProvider router={router}/>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;