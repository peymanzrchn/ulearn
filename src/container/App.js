import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Peyman from "./Peyman";

function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <Peyman />
                <ToastContainer />
            </Fragment>
        </BrowserRouter>
    );
}

export default App;
