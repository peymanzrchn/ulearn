import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div id="container-404">
            <div class="content-404">
                <h2>404</h2>
                <h4>صحفه پیدا نشد !</h4>
                <p>مشکلی پیش آمده صحفه مورد نظر شما پیدا نشد.</p>
                <NavLink to="/">بازگشت به صحفه اصلی</NavLink>
            </div>
        </div>
    );
};

export default NotFound;
