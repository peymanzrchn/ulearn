import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
    const location = useLocation();

    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link
                            className={
                                location.pathname === "/dashboard" ? "nav-link active" : "nav-link "
                            }
                            aria-current="page"
                            to="/dashboard"
                        >
                            <span data-feather="home" className="align-text-bottom"></span>
                            داشبورد
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">
                            بازگشت به صحفه اصلی
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">
                            <span data-feather="shopping-cart" className="align-text-bottom"></span>
                            خروج
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminSidebar;
