import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.post["Content-Type"] = "application/json"; //set header

const token = localStorage.getItem("token");

if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axios.interceptors.response.use(null, (error) => {
    const expectedErrors = error.response && error.response >= 400 && error.response < 500;
    if (!expectedErrors) {
        toast.error("مشکلی از سمت سرور رخ داده است.", {
            position: "top-right",
            closeOnClick: true,
        });
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
