import { Fragment } from "react";

const Popular = () => {
    return (
        <Fragment>
            <section className="section-featured">
                <div className="container-css">
                    <h2 className="heading-featured-in">
                        تایید شده توسط شرکت‌ها و دانشگاه‌های معتبر
                    </h2>
                    <div className="logos">
                        <img src="./img/penn.webp" alt="" />
                        <img src="./img/imperial.webp" alt="" />
                        <img src="./img/ibm.webp" alt="" />
                        <img src="./img/umich.webp" alt="" />
                        <img src="./img/google.webp" alt="" />
                        <img src="./img/duke.webp" alt="" />
                        <img src="./img/illinois.webp" alt="" />
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Popular;
