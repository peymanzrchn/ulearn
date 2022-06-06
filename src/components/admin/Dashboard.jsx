import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { paginate } from "../../utils/paginate";

import Pagination from "../courses/Pagination";

const Dashboard = ({ courses }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(5);

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    const courseData = paginate(courses, currentPage, perPage);

    return (
        <Fragment>
            <div className="course-dashboard">
                <h3 className="alert alert-info text-center">لیست دوره ها</h3>
                <Link to="/dashboard/new-course">
                    <button className="btn btn-primary btn-lg mb-4">
                        <span
                            className="fa fa-plus"
                            style={{
                                verticalAlign: "middle",
                                marginLeft: "1em",
                            }}
                        ></span>
                        اضافه کردن دوره جدید
                    </button>
                </Link>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">عنوان دوره</th>
                            <th scope="col">تصویر دوره</th>
                            <th scope="col">
                                قیمت دوره (تومان)
                                <span
                                    className="fa fa-long-arrow-up"
                                    style={{ marginRight: "0.5rem" }}
                                ></span>
                                <span
                                    className="fa fa-long-arrow-down"
                                    style={{ marginRight: "0.5rem" }}
                                ></span>
                            </th>
                            <th scope="col">ویرایش</th>
                            <th scope="col">حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseData.map((course) => (
                            <tr key={course._id}>
                                <td style={{ verticalAlign: "middle" }}>{course.title}</td>
                                <td>
                                    <a
                                        href={`https://ulearn-ol.herokuapp.com/uploads/thumbnails/${course.thumbnail}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-info btn-lg"
                                    >
                                        نمایش تصویر
                                    </a>
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                    {course.price === 0 ? "رایگان" : `${course.price}`}
                                </td>
                                <td>
                                    <Link to={`/dashboard/edit-course/${course._id}`}>
                                        <button className="btn btn-warning btn-lg">ویرایش</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/dashboard/delete-course/${course._id}`}>
                                        <button className="btn btn-danger btn-lg">حذف</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="navbar-fixed-bottom text-center footer">
                <Pagination
                    totalCourse={courses.length}
                    currentPage={currentPage}
                    perPage={perPage}
                    onChangePage={handleChangePage}
                />
            </div>
        </Fragment>
    );
};

export default Dashboard;
