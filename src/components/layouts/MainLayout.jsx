import { Fragment } from "react";
import Helmet from "react-helmet";
import { useLocation } from "react-router-dom";
import About from "../common/About";
import Comments from "../common/Comments";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Navbar from "../common/Navbar";
import Popular from "../common/Popular";

const MainLayout = (props) => {
    const location = useLocation();
    return (
        <Fragment>
            <Helmet>
                <title>پیمان لرن | صحفه اصلی</title>
            </Helmet>
            {location.pathname === "/" ? <Navbar /> : null}
            {location.pathname === "/" ? <Header /> : null}
            {location.pathname === "/" ? <Popular /> : null}
            {location.pathname === "/" ? <About /> : null}
            {props.children}
            {location.pathname === "/" ? <Comments /> : null}

            {location.pathname === "/" ? <Footer /> : null}
        </Fragment>
    );
};

export default MainLayout;
