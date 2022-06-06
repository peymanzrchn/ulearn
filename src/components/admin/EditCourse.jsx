import { isEmpty } from "lodash";
import { Fragment, useEffect, useState } from "react";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import { editCourse } from "../../services/courseService";
import { successMessage } from "../../utils/messages";

const EditCourse = ({ user }) => {
    const { courseId } = useParams();
    console.log(courseId);
    const navigate = useNavigate();

    const [state, setState] = useState({
        course: {
            thumbnail: "",
            title: "",
            price: "",
            info: "",
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: courseData } = await editCourse(courseId);

                setState({
                    ...state,
                    course: courseData,
                });
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const setCourseInfo = (event) => {
        setState({
            ...state,
            course: {
                ...state.course,
                [event.target.value]: [event.target.value],
            },
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await editCourse(courseId, state.course);
            if (data) {
                successMessage("کاربر با موفقیت ویرایش شد.");
                navigate("/dashboard");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const { course } = state;

    if (isEmpty(user)) return <Navigate to="/" replace />;

    return (
        <Fragment>
            <div>
                <h3 className="text-center alert alert-info">ویرایش دوره</h3>
                <div className="d-flex align-items-center justify-content-center">
                    <form className="w-50" onSubmit={handleSubmit}>
                        <label for="selectedThumbnail">عکس بند انگشتی</label>
                        <div className="input-group mb-3 mt-3">
                            <input
                                type="file"
                                className="custom-file-input form-control"
                                name="thumbnail"
                                aria-describedby="inputGroupFileAddon03"
                                value={course.thumbnail}
                                onChange={setCourseInfo}
                            />
                        </div>
                        <div className="form-group">
                            <label for="title">عنوان دوره</label>
                            <input
                                type="text"
                                className="form-control w-50"
                                name="title"
                                value={course.title}
                                onChange={setCourseInfo}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label for="status">قیمت</label>
                            <input
                                type="text"
                                name="price"
                                className="form-control w-50"
                                value={course.price}
                                onChange={setCourseInfo}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <h5>توضیحات دوره</h5>
                            <textarea
                                name="info"
                                className="form-control"
                                value={course.info}
                                onChange={setCourseInfo}
                            ></textarea>
                        </div>

                        <div className="row">
                            <input
                                type="submit"
                                value="ویرایش پست"
                                className="btn btn-success btn-lg mt-5"
                            />

                            <Link to="/dashboard" className="btn btn-warning btn-lg mt-3">
                                انصراف
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default EditCourse;
