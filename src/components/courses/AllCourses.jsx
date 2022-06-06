import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { paginate } from "../../utils/paginate";
import GetAllCourses from "./getAllCourses";
import Pagination from "./Pagination";

const AllCourses = () => {
    const [perPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);

    const courses = useSelector((state) => state.courses);

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    const archiveCourse = paginate(courses, currentPage, perPage);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <section className="allcourses">
                <div className="wrapper-all">
                    <GetAllCourses courses={archiveCourse} />
                </div>
                <Pagination
                    totalCourse={courses.length}
                    currentPage={currentPage}
                    perPage={perPage}
                    onChangePage={handleChangePage}
                />
            </section>
        </Fragment>
    );
};

export default AllCourses;
