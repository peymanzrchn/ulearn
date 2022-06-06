import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ShowImage from "../common/Showimage";

const Course = ({ courses }) => {
    return (
        <Fragment>
            <section className="courses">
                <div className="wrapper">
                    <div className="course-heading">
                        <h3>آخرین دوره‌ها</h3>
                        <NavLink to="/all-courses">مشاهده‌ی تمامی دوره‌ها</NavLink>
                    </div>
                    {courses.map((course) => (
                        <div className="card-course" key={course._id}>
                            <div className="card-course-header">
                                <NavLink to={`/course/${course._id}`}>
                                    <ShowImage image={course.thumbnail} />
                                </NavLink>
                            </div>
                            <div className="card-course-body">
                                <div className="card-course-title">
                                    <h3>
                                        <NavLink to={`/course/${course._id}`}>
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
                </div>
            </section>
        </Fragment>
    );
};

export default Course;
