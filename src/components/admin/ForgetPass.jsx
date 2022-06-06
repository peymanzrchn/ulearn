import { Fragment, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import SimpleReactValidator from "simple-react-validator";
import { forgetPass } from "./../../services/userService";
import { toast } from "react-toastify";
import Helmet from "react-helmet";

const ForgetPass = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [getCaptcha, setCaptcha] = useState(false);
    const [, forceUpdate] = useState();

    const validator = useRef(new SimpleReactValidator());

    const captcha = useRef(null);

    const onChange = async () => {
        const token = await captcha.current.getValue();
        console.log(token);
        setCaptcha(true);
    };

    // const validateHuman = async (token) => {
    //     const secretKey = "6LcBAdQfAAAAAEsR576I9OVicSm2t_Eh_cXBNqGS";
    //     const response = await fetch(
    //         `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    //         {
    //             method: "POST",
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    //             },
    //         }
    //     );

    //     const data = await response.json();

    //     if (data.success) {
    //         console.log("success");
    //     } else {
    //         console.log("false");
    //     }

    //     return data.success;
    // };

    const reset = () => {
        setEmail("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
        };

        try {
            if (validator.current.allValid()) {
                const { status, data } = await forgetPass(user);
                if (status === 200) {
                    toast.success("عملیات موفقیت‌آمیز بود", {
                        position: "top-right",
                        closeOnClick: true,
                    });
                    toast.success("لینک ریست به ایمیل شما ارسال شد.", {
                        position: "top-right",
                        closeOnClick: true,
                    });
                    // await validateHuman();
                    localStorage.setItem("token", data.token);
                    navigate("/login");
                    reset();
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (err) {
            toast.error("ایمیل مورد نظر موجود نمیباشد.", {
                position: "top-right",
                closeOnClick: true,
            });
            console.log(err);
        }
    };

    return (
        <Fragment>
            <div className="forget">
                <div className="form-box">
                    <Helmet>
                        <title>پیمان لرن | ورود به فراموشی رمز عبور</title>
                    </Helmet>
                    <div className="title">
                        <h3>فراموشی رمز عبور</h3>
                    </div>

                    <form className="form-signin" onSubmit={handleSubmit}>
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

                        <div className="recaptcha">
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey="6LcBAdQfAAAAAMh9U7IvTFsn8sZa9jouyQ8WUZmT"
                                onChange={onChange}
                            />
                        </div>
                        <button type="submit" className="btn-admin" disabled={!getCaptcha}>
                            ورود
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

export default ForgetPass;
