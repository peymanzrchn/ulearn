import { Fragment, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Course from "../components/courses/Course";
import Login from "../components/admin/Login";
import Register from "../components/admin/Register";
import ForgetPass from "../components/admin/ForgetPass";
import ResetPass from "../components/admin/ResetPass";
import SingleCourse from "../components/courses/SingleCourse";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AllCourses from "../components/courses/AllCourses";
import * as jose from "jose";
import Logout from "../components/admin/Logout";
import UserContext from "../components/context/UserContext";
import NotFound from "../components/common/NotFound";
import PrivateLayout from "../components/layouts/PrivateLayout";
import { addUser, clearUser } from "../actions/user";
import { useSelector, useDispatch } from "react-redux";
import { paginate } from "../utils/paginate";
import { Routes, Route, useLocation } from "react-router-dom";
import AddCourse from "../components/admin/AddCourse";
import EditCourse from "../components/admin/EditCourse";
import DeleteCourse from "../components/admin/DeleteCourse";

const Peyman = () => {
    const location = useLocation();
    const courses = useSelector((state) => state.courses);
    const course = useSelector((state) => state.user);
    const user = useSelector((state) => state.user);
    const indexCourse = paginate(courses, 1, 8);

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jose.decodeJwt(token);
            const dateNow = Date.now / 1000;
            if (decodedToken.exp < dateNow) {
                localStorage.removeItem("token");
                dispatch(clearUser());
            } else {
                dispatch(addUser(decodedToken.user));
            }
        }
    }, [dispatch]);

    return (
        <Fragment>
            <MainLayout>
                {location.pathname === "/all-courses" ? <Navbar /> : null}

                <Routes>
                    <Route path="/dashboard/delete-course/courseId" element={<DeleteCourse />} />
                    <Route
                        path="/dashboard/edit-course/:courseId"
                        element={<EditCourse course={course} user={user} />}
                    />
                    <Route path="/dashboard/new-course" element={<AddCourse user={user} />} />
                    <Route path="/dashboard" element={<PrivateLayout />} />
                    <Route path="/all-courses" element={<AllCourses />} />
                    <Route path="/course/:id" element={<SingleCourse />} />
                    <Route path="/reset-password" element={<ResetPass />} />
                    <Route path="/forget-password" element={<ForgetPass />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route element={<UserContext />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                    <Route path="/" element={<Course courses={indexCourse} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                {location.pathname === "/all-courses" ? <Footer /> : null}
            </MainLayout>
        </Fragment>
    );
};

export default Peyman;
