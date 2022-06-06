import { Fragment, useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import { resetPass } from "../../services/userService";
import { useNavigate, NavLink } from "react-router-dom";
import Helmet from "react-helmet";

const ResetPass = () => {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [, forceUpdate] = useState();

    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "پرکردن این فیلد الزامی میباشد.",
                min: "کمتر از 5 کاراکتر نبید باشد.",
                in: "کلمه های عبور یکسان نیستند.",
            },
            element: (message) => <div style={{ color: "red" }}>{message}</div>,
        })
    );

    const reset = () => {
        setPassword("");
        setConfirmPassword("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            password,
            confirmPassword,
        };

        try {
            if (validator.current.allValid()) {
                const { status } = await resetPass(user);
                if (status === 200) {
                    toast.success("پسوورد با موفقیت تغییر یافت.", {
                        position: "top-right",
                        closeOnClick: true,
                    });
                    navigate("/");
                    reset();
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (err) {
            toast.error("مشکلی پیش آمده", {
                position: "top-right",
                closeOnClick: true,
            });
            reset();
        }
    };

    return (
        <Fragment>
            <div className="register">
                <div className="form-box">
                    <Helmet>
                        <title>پیمان لرن | بازنشانی رمز عبور</title>
                    </Helmet>
                    <div className="title">
                        <h3>بازنشانی رمز عبور</h3>
                    </div>

                    <form className="form-signin" onSubmit={handleSubmit}>
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
                            اجرا
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
        </Fragment>
    );
};

export default ResetPass;
