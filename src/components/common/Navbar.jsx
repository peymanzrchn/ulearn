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

                                <li className="main-nav-link">صحفه اصلی</li>
                                <li className="main-nav-link">درباره ما</li>
                                <li className="main-nav-link">تماس با ما</li>
                            </>
                        )}
                    </ul>
                </nav>
                <div className="menu">
                    {!isEmpty(user) ? (
                        <div className="navbar">
                            <div className="dropdown">
                                <button className="dropbtn">
                                    منوی کاربری
                                    <i
                                        className="fa fa-caret-down"
                                        style={{ marginRight: "5px" }}
                                    ></i>
                                </button>
                                <div className="dropdown-content">
                                    <a href="#">پنل ادمین</a>
                                    <a href="/logout">خروج</a>
                                </div>
                            </div>
                        </div>
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
