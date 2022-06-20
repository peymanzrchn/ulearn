import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [getShowNavbar, setShowNavbar] = useState(false);

    const user = useSelector((state) => state.user);

    const handleShowNavbar = () => {
        setShowNavbar(!getShowNavbar);
    };

    return (
        <Fragment>
            <header className={getShowNavbar ? "header active" : "header"}>
                <a href="#">
                    <span className="logo">
                        <Link to="/" style={{ color: "#333" }}>
                            u<span style={{ color: "#e67e22" }}>L</span>earn
                        </Link>
                    </span>
                </a>
                <nav className={getShowNavbar ? "main-nav nav-open" : "main-nav"}>
                    <ul className="main-nav-list">
                        {!isEmpty(user) ? (
                            <>
                                <li>
                                    <i className="fa fa-user" style={{ margin: "1rem" }}></i>
                                    <a className="main-nav-link" style={{ color: "#333" }}>
                                        {user.fullname} خوش آمدید.
                                    </a>
                                </li>

                                <li>
                                    <NavLink to="/dashboard" className="main-nav-link">
                                        پنل ادمین
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/logout" className="main-nav-link">
                                        خروج
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink className="main-nav-link login-outline" to="/login">
                                        ورود
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink className="main-nav-link nav-cta" to="/register">
                                        عضویت
                                    </NavLink>
                                </li>
                                <li className="main-nav-link">درباره ما</li>
                                <li className="main-nav-link">تماس با ما</li>
                            </>
                        )}
                    </ul>
                </nav>
                <div className="menu">
                    {!isEmpty(user) ? (
                        <ul className="d-flex list-unstyled">
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className="main-nav-link"
                                    style={{ fontSize: "16px", padding: "10px" }}
                                >
                                    پنل ادمین
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/logout"
                                    className="main-nav-link"
                                    style={{ fontSize: "16px", padding: "10px" }}
                                >
                                    خروج
                                </NavLink>
                            </li>
                        </ul>
                    ) : (
                        <div className="hamburger-menu" onClick={handleShowNavbar}>
                            <div className="bar"></div>
                        </div>
                    )}
                </div>
            </header>
        </Fragment>
    );
};

export default Navbar;
