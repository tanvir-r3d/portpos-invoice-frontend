import {useLocation} from "react-router-dom";
import Login from "./Login/LoginForm";
import {useSelector} from "react-redux";
import Layout from "./Layout";

function Dashboard() {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    let {pathname} = useLocation();
    const renderElement = () => {
        if (pathname === "/" && !isLoggedIn) {
            return <Login></Login>;
        } else {
            return <Layout></Layout>
        }
    }
    return (
        <>{renderElement()}</>
    );
}

export default Dashboard;