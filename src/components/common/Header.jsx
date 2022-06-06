import { Fragment } from "react";

const Header = () => {
    return (
        <Fragment>
            <main>
                <section className="section-hero">
                    <div className="hero">
                        <div className="hero-img-box">
                            <img src="./img/banner_img.png" className="hero-img" alt="" />
                        </div>
                        <div className="hero-text-box">
                            <h1 className="heading-primary center-text">مرجع آموزش آنلاین</h1>
                            <p className="hero-description center-text">
                                مهارت های جدید را به صورت آنلاین با مدرسین برتر بیاموزید.
                            </p>
                            <div className="course-btn">
                                <span className="button button--outline ">بیشتر بدانید &darr;</span>
                                <span className="button button--full show-more">
                                    همین الان شروع کن
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    );
};

export default Header;
