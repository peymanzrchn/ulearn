import { Fragment } from "react";
import { range } from "lodash";

const Pagination = ({ totalCourse, currentPage, perPage, onChangePage }) => {
    const pageCount = Math.ceil(totalCourse / perPage);

    if (pageCount === 1)
        return (
            <div className="pagination">
                <a href="#">1</a>
            </div>
        );

    const pages = range(1, pageCount + 1);

    return (
        <Fragment>
            <div className="pagination">
                <a href="#">&laquo;</a>
                {pages.map((page) => (
                    <a
                        href="#"
                        key={page}
                        className={page === currentPage ? "active" : ""}
                        onClick={() => onChangePage(page)}
                    >
                        {page}
                    </a>
                ))}
                <a href="#">&raquo;</a>
            </div>
        </Fragment>
    );
};

export default Pagination;
