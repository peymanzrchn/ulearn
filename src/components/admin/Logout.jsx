import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../actions/user";
import { Navigate, useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    if (isEmpty(user)) {
        <Navigate to="/" />;
    }

    useEffect(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("_grecaptcha");
        dispatch(clearUser());
        navigate("/");
    }, []);

    return null;
};

export default Logout;
