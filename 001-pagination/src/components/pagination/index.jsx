import React from "react";
// import "./Pagination.css";

const Pagination = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleClick = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        const leftSide = Math.max(currentPage - 2, 1);
        const rightSide = Math.min(currentPage + 2, totalPages);

        if (leftSide > 1) {
            pageNumbers.push(
                <button
                    key={1}
                    className={`page-item ${currentPage === 1 ? "active" : ""}`}
                    onClick={() => handleClick(1)}
                >
                    1
                </button>
            );
            if (leftSide > 2) {
                pageNumbers.push(
                    <span key="left-ellipsis" className="ellipsis">
                        ...
                    </span>
                );
            }
        }

        for (let i = leftSide; i <= rightSide; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={`page-item ${currentPage === i ? "active" : ""}`}
                    onClick={() => handleClick(i)}
                >
                    {i}
                </button>
            );
        }

        if (rightSide < totalPages) {
            if (rightSide < totalPages - 1) {
                pageNumbers.push(
                    <span key="right-ellipsis" className="ellipsis">
                        ...
                    </span>
                );
            }
            pageNumbers.push(
                <button
                    key={totalPages}
                    className={`page-item ${
                        currentPage === totalPages ? "active" : ""
                    }`}
                    onClick={() => handleClick(totalPages)}
                >
                    {totalPages}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <div className="pagination">
            <button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
