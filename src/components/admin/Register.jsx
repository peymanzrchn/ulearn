import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/context";

import Helmet from "react-helmet";

const Register = () => {
    const registerContext = useContext(Context);

    const {
        fullname,
        setFullname,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleRegister,
        validator,
    } = registerContext;

    return (
        <div className="register">
            <div className="form-box">
                <Helmet>
                    <title>پیمان لرن | عضویت</title>
                </Helmet>
                <div className="title">
                    <h3>عضویت در سایت</h3>
                </div>

                <form className="form-signin" onSubmit={(e) => handleRegister(e)}>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="نام و نام خانوادگی"
                        name="fullname"
                        value={fullname}
                        onChange={(e) => {
                            setFullname(e.target.value);
                            validator.current.showMessageFor("fullname");
                        }}
                    />
                    {validator.current.message("fullname", fullname, "required|min:5")}
                    <input
                        type="text"
                        className="input-field"
                        placeholder="آدرس ایمیل"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            validator.current.showMessageFor("email");
                        }}
                    />
                    {validator.current.message("email", email, "required|email")}
                    <input
                        type="password"
                        className="input-field"
                        placeholder="کلمه عبور"
                        name="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            validator.current.showMessageFor("password");
                        }}
                    />
                    {validator.current.message("password", password, "required|min:5")}
                    <input
                        type="password"
                        className="input-field"
                        placeholder="تکرار کلمه عبور"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            // validator.current.showMessageFor("confirmPassword");
                        }}
                    />
                    {validator.current.message(
                        "confirmPassword",
                        confirmPassword,
                        `required|in:${password}`
                    )}
                    <button type="submit" className="btn-admin">
                        ثبت‌نام
                    </button>

                    <NavLink to="/" className="return-home">
                        بازگشت به صحفه‌ی اصلی
                    </NavLink>
                </form>

                <div className="social">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Register;
