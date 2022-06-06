import { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="container-css grid grid--footer">
                    <div className="address-col">
                        <p className="footer-heading">تماس با ما</p>
                        <address className="contacts">
                            <p className="address">تهران - خیابان انقلاب - پلاک ۱۲۳۴</p>
                            <p>
                                <a className="footer-link" href="tel:415-201-6370">
                                    ۰۲۱ - ۱۲۳۴۵۶۷۸۹
                                </a>
                                <br />
                                <a className="footer-link" href="mailto:hello@omnifood.com">
                                    info@example.com
                                </a>
                            </p>
                        </address>
                    </div>

                    <nav className="nav-col">
                        <p className="footer-heading">پیوندهای مفید</p>
                        <ul className="footer-nav">
                            <li>
                                <a className="footer-link" href="#">
                                    خانه
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="#">
                                    عضویت
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="#">
                                    ورود
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="#">
                                    همکاری با ما
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <nav className="nav-col">
                        <p className="footer-heading">خبرنامه</p>
                        <ul className="footer-nav">
                            <li>
                                <a className="footer-link" href="#">
                                    لورم ایپسوم
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="#">
                                    لورم ایپسوم
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="#">
                                    لورم ایپسوم
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="#">
                                    لورم ایپسوم
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <nav className="nav-col">
                        <p className="footer-heading">منابع</p>
                        <ul className="footer-nav">
                            <li>
                                <a className="footer-link" href="#">
                                    لورم ایپسوم
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="#">
                                    لورم ایپسوم
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="#">
                                    لورم ایپسوم
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="logo-col">
                        <a href="#" className="footer-logo" style={{ color: "#333" }}>
                            u<span style={{ color: "#e67e22" }}>L</span>earn
                        </a>

                        <ul className="social-links">
                            <li>
                                <a className="footer-link" href="#">
                                    <i className="social-icon fa fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="#">
                                    <i className="social-icon fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="#">
                                    <i className="social-icon fa fa-twitter"></i>
                                </a>
                            </li>
                        </ul>

                        <p className="copyright">
                            Copyright &copy; <span className="year">2027</span> همه ی حقوق مادی و
                            معنوی این سایت متعلق به برنامه نویس میباشد
                        </p>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
