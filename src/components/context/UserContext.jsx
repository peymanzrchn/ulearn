import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import { errorMessage, successMessage } from "../../utils/messages";
import { Context } from "./context";
import { loginUser, resgisterUser } from "../../services/userService";
import * as jose from "jose";
import SimpleReactValidator from "simple-react-validator";
import { addUser } from "../../actions/user";

const UserContext = (props) => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [, forceUpdate] = useState();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "پرکردن این فیلد الزامی میباشد.",
                min: "کمتر از 5 کاراکتر نباید باشد.",
                email: "ایمیل نوشته شده صحیح نمیباشد.",
                in: "کلمه های عبور یکسان نیستند.",
            },
            element: (message) => <div style={{ color: "red" }}>{message}</div>,
        })
    );

    const resetState = () => {
        setFullname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password,
        };

        try {
            if (validator.current.allValid()) {
                const { status, data } = await loginUser(user);
                if (status === 200) {
                    successMessage("ورود موفقیت آمیز بود.");
                    localStorage.setItem("token", data.token);
                    dispatch(addUser(jose.decodeJwt(data.token).user));
                    <Navigate to="/dashboard" replace state={{ email, password }} />;
                    resetState();
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (err) {
            errorMessage("مشکلی پیش آمده.");
            resetState();
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const user = {
            fullname,
            email,
            password,
            confirmPassword,
        };

        try {
            if (validator.current.allValid()) {
                const { status } = await resgisterUser(user);
                if (status === 201) {
                    successMessage("کاربر با موفقیت ساخته شد.");
                    navigate("/login");
                    resetState();
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (err) {
            errorMessage("مشکلی پیش آمده.");
            resetState();
        }
    };

    return (
        <Context.Provider
            value={{
                fullname,
                setFullname,
                email,
                setEmail,
                password,
                setPassword,
                confirmPassword,
                setConfirmPassword,
                validator,
                handleLogin,
                handleRegister,
            }}
        >
            {props.children}
            <Outlet />
        </Context.Provider>
    );
};

export default UserContext;
