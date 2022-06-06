import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCourse } from "../../actions/course";
import { NavLink, useParams } from "react-router-dom";

const SingleCourse = (props) => {
    const params = useParams();

    const course = useSelector((state) => state.course);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleCourse(params.id));
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <section className="content-course">
                <div className="wrapper-si">
                    <header className="content-title">
                        <h3>{course.title}</h3>
                        <NavLink to="/">بازگشت به صحفه اصلی</NavLink>
                    </header>
                    <div className="aside">
                        <div className="statistics">
                            <ul>
                                <li>
                                    <span> مدت دوره </span>
                                    <i> 03:12:52 </i>
                                </li>
                                <li>
                                    <span> تعداد ویدیوها </span>
                                    <i> 16 </i>
                                </li>
                                <li>
                                    <span> تعداد دانشجوها </span>
                                    <i> 52 نفر </i>
                                </li>
                            </ul>

                            <a href=""> شرکت در دوره :{course.price} تومان </a>
                        </div>

                        <div className="teacher-info">
                            <img src="../img/1.png" />
                            {/* <p> مدرس : {user.fullname} </p> */}
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است استفاده از طراحان گرافیک است ...
                            </p>
                        </div>
                        <div className="term-info">
                            <h2> اطلاعات این دوره </h2>
                            <ul>
                                <li>سطح دوره: پیشرفته</li>
                                <li>وضعیت دوره: در حال برگزاری</li>
                                <li>قیمت :{course.price} تومان</li>
                                <li>تاریخ ثبت این دوره : چهار شنبه ۲۱ شهریور ۱۳۹۷</li>
                                <li>آخرین بروزرسانی دوره : چهار شنبه ۲۱ شهریور ۱۳۹۷</li>
                            </ul>
                        </div>

                        <div className="share-layer">
                            <span> به اشتراک گذاری </span>
                            <a href="">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-youtube"></i>
                            </a>
                        </div>

                        <div className="tags-layer">
                            <NavLink to="/">بازگشت به صحفه اصلی</NavLink>
                        </div>
                    </div>

                    <div className="content-description">
                        <img src={`http://localhost:4000/uploads/thumbnails/${course.thumbnail}`} />

                        <p>{course.info}</p>

                        <h2> سرفصل های این دوره : </h2>
                        <ul>
                            <li>
                                {" "}
                                <h3> معرفی این دوره </h3> <i> رایگان </i> <span>00:15:12</span>
                            </li>
                            <li>
                                {" "}
                                <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>{" "}
                                <span>01:15:12</span>
                            </li>
                            <li>
                                {" "}
                                <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3> <i> نقدی </i>{" "}
                                <span>02:05:12</span>
                            </li>
                            <li>
                                {" "}
                                <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3> <i> نقدی </i>{" "}
                                <span>00:10:12</span>
                            </li>
                            <li>
                                {" "}
                                <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>{" "}
                                <span>01:15:12</span>
                            </li>
                            <li>
                                {" "}
                                <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3> <i> نقدی </i>{" "}
                                <span>02:05:12</span>
                            </li>
                            <li>
                                {" "}
                                <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3> <i> نقدی </i>{" "}
                                <span>00:10:12</span>
                            </li>
                            <li>
                                {" "}
                                <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>{" "}
                                <span>01:15:12</span>
                            </li>
                            <li>
                                {" "}
                                <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3> <i> نقدی </i>{" "}
                                <span>02:05:12</span>
                            </li>
                            <li>
                                {" "}
                                <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3> <i> نقدی </i>{" "}
                                <span>00:10:12</span>
                            </li>
                        </ul>
                    </div>

                    <div className="user-comments">
                        <header>
                            <h3> نظرات کاربران </h3>
                        </header>
                        <div className="inner">
                            <form>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fullname"
                                    placeholder="نام و نام خانوادگی"
                                />
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="ایمیل"
                                    className="form-control"
                                />
                                <textarea
                                    name="content"
                                    cols="30"
                                    rows="10"
                                    className="form-control"
                                    placeholder="متن نظر"
                                ></textarea>
                                <button type="submit" className="btn-form">
                                    {" "}
                                    ثبت دیدگاه{" "}
                                </button>
                            </form>
                            <div className="comment-list">
                                <div className="comment-row">
                                    <img src="../img/1.png" />
                                    <div className="left-col">
                                        <h3> میترا رحیمی </h3>
                                        <span>12/03/1397</span>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                            چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                                            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                        </p>
                                    </div>
                                </div>

                                <div className="comment-row">
                                    <img src="../img/1.png" />
                                    <div className="left-col">
                                        <h3> میترا رحیمی </h3>
                                        <span>12/03/1397</span>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                            چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                                            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                        </p>
                                    </div>
                                </div>

                                <div className="comment-row">
                                    <img src="../img/1.png" />
                                    <div className="left-col">
                                        <h3> میترا رحیمی </h3>
                                        <span>12/03/1397</span>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                            چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                                            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                        </p>
                                    </div>
                                </div>

                                <div className="comment-row">
                                    <img src="../img/1.png" />
                                    <div className="left-col">
                                        <h3> میترا رحیمی </h3>
                                        <span>12/03/1397</span>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                            چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                                            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                        </p>
                                    </div>
                                </div>

                                <div className="comment-row">
                                    <img src="../img/1.png" />
                                    <div className="left-col">
                                        <h3> میترا رحیمی </h3>
                                        <span>12/03/1397</span>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                            چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                                            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default SingleCourse;
