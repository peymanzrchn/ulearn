import { isEmpty } from "lodash";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const DeleteCourse = () => {
    const course = useSelector((state) => state.course);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    if (isEmpty(user)) return <Navigate to="/" replace />;

    return (
        <Fragment>
            <div className="card text-center">
                <h3 style={{ fontSize: "2rem" }}>پاک کردن دوره {course.title}</h3>
                <hr />
                <p> مطمئن هستی می خوای دوره {course.title} رو پاک کنی؟</p>
            </div>
            <button className="btn btn-danger " style={{ margin: "1em" }}>
                مطمئنم پاک کن
            </button>
            <Link to="/dashboard">
                <button className="btn btn-warning mr-5" style={{ margin: "1em" }}>
                    انصراف
                </button>
            </Link>
        </Fragment>
    );
};

export default DeleteCourse;
