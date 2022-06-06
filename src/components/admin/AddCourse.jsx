import { isEmpty } from "lodash";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { createNewCourse } from "../../actions/courses";

const AddCourse = ({ user }) => {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [info, setInfo] = useState();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            let formData = new FormData();
            formData.append("title", title);
            formData.append("price", Number.parseInt(price));
            formData.append("thumbnail", event.target.thumbnail.files[0]);
            formData.append("info", info);

            dispatch(createNewCourse(formData));
            setTimeout(() => {
                navigate("/dashboard");
                window.location.reload();
            }, 3000);
        } catch (err) {
            console.log(err);
        }
    };

    if (isEmpty(user)) return <Navigate to="/" replace />;
    return (
        <Fragment>
            <div>
                <h3 className="text-center alert alert-info">ساخت دوره‌ی جدید</h3>
                <div className="d-flex align-items-center justify-content-center">
                    <form className="w-50" onSubmit={handleSubmit}>
                        <label for="selectedThumbnail">عکس بند انگشتی</label>
                        <div className="input-group mb-3 mt-3">
                            <input
                                type="file"
                                className="custom-file-input form-control"
                                name="thumbnail"
                                aria-describedby="inputGroupFileAddon03"
                            />
                        </div>
                        <div className="form-group">
                            <label for="title">عنوان دوره</label>
                            <input
                                type="text"
                                className="form-control w-50"
                                name="title"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label for="status">قیمت</label>
                            <input
                                type="text"
                                name="price"
                                className="form-control w-50"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <h5>توضیحات دوره</h5>
                            <textarea
                                name="info"
                                className="form-control"
                                value={info}
                                onChange={(event) => setInfo(event.target.value)}
                            ></textarea>
                        </div>

                        <div className="row">
                            <input
                                type="submit"
                                value="ساخت پست"
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

export default AddCourse;
