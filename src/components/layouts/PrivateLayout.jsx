import { isEmpty } from "lodash";
import { Fragment } from "react";
import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import AdminSidebar from "../admin/AdminSidebar";
import Dashboard from "../admin/Dashboard";

const PrivateLayout = () => {
    const user = useSelector((state) => state.user);
    const courses = useSelector((state) => state.courses);
    const course = useSelector((state) => state.course);

    if (isEmpty(user)) return <Navigate to="/" replace />;

    return (
        <Fragment>
            <Helmet>
                <title>داشبورد</title>
            </Helmet>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 d-none d-md-block" href="#">
                    سلام {user.fullname}
                </a>
                <button
                    className="navbar-toggler position-absolute d-md-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input
                    className="form-control form-control-dark w-50 rounded-0 border-0"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                />
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <Link className="nav-link px-3" to="/logout">
                            خروج
                        </Link>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 px-md-4 ms-sm-auto">
                        <AdminSidebar />
                    </div>
                    <div className="col-lg-10">
                        <Dashboard courses={courses} course={course} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PrivateLayout;
