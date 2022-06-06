import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSearchParams, useLocation } from "react-router-dom";

const GetAllCourses = ({ courses }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    return (
        <Fragment>
            <div className="allcourses-title">
                <header>
                    دوره های <span style={{ color: "#cf711f" }}> برنامه نویسی وب </span>
                    <span className="number-course">{courses.length} دوره</span>
                </header>
                <form className="example">
                    <input
                        type="text"
                        placeholder="جستجو...."
                        value={searchParams.get("filter")}
                        onChange={(event) => {
                            let filter = event.target.value;
                            if (filter) {
                                setSearchParams({ filter: filter });
                            } else {
                                setSearchParams({});
                            }
                        }}
                    />
                </form>
            </div>
            {courses
                .filter((course) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = course.title.toLocaleLowerCase();
                    return name.startsWith(filter.toLocaleLowerCase());
                })
                .map((course) => (
                    <div className="card-course" key={course._id}>
                        <div className="card-course-header">
                            <NavLink to={`/course/${course._id}`}>
                                <img
                                    src={`https://ulearn-ol.herokuapp.com/uploads/thumbnails/${course.thumbnail}`}
                                    alt="node"
                                />
                            </NavLink>
                        </div>
                        <div className="card-course-body">
                            <div className="card-course-title">
                                <h3>
                                    <NavLink to={`/course/${course._id}${location.search}`}>
                                        {course.title}
                                    </NavLink>
                                </h3>
                            </div>

                            <div className="card-course-user">
                                <div className="user-course-icon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <div className="user-course-fullname">
                                    <p>{course.user.fullname}</p>
                                </div>
                            </div>

                            <div className="card-course-footer">
                                <div className="card-course-status">
                                    <p>{course.price === 0 ? "رایگان" : course.price}</p>
                                </div>
                                <div className="card-course-time">
                                    <i className="fa fa-clock-o"></i>
                                    <p className="timer">1:50:28</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </Fragment>
    );
};

export default GetAllCourses;
