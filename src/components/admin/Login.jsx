import { useContext } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { Context } from "../context/context";

import Helmet from "react-helmet";

const Login = () => {
    const loginContext = useContext(Context);

    const { email, setEmail, password, setPassword, handleLogin, validator } = loginContext;

    const user = useSelector((state) => state.user);

    if (!isEmpty(user)) return <Navigate to="/" replace />;

    return (
        <div className="login">
            <div className="form-box">
                <Helmet>
                    <title>پیمان لرن | ورود به بخش مدیریت</title>
                </Helmet>
                <div className="title">
                    <h3>ورود به بخش مدیریت</h3>
                </div>

                <form className="form-signin" onSubmit={(e) => handleLogin(e)}>
                    <input
                        type="email"
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
                    <label>
                        <input
                            type="checkbox"
                            name="remember"
                            value="remember-me"
                            style={{ marginTop: "2rem" }}
                        />{" "}
                        من را به خاطر بسپار
                    </label>
                    <button type="submit" className="btn-admin">
                        ورود
                    </button>
                    <NavLink to="/" className="return-home">
                        بازگشت به صحفه‌ی اصلی
                    </NavLink>

                    <a href="/forget-password" className="return-home">
                        فراموشی رمز عبور
                    </a>
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
                </form>
            </div>
        </div>
    );
};

export default Login;
