import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import Layout from "./Layout";
import LoginForm from "./Login/LoginForm";

function Dashboard() {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    let {pathname} = useLocation();
    const renderElement = () => {
        // if (pathname === "/" && !isLoggedIn) {
        //     return <LoginForm/>;
        // } else {
            return <Layout/>
        // }
    }
    return (
        <>{renderElement()}</>
    );
}

export default Dashboard;