import React, { useState } from "react";
import Pagination from "./components/pagination";

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalItems = 100; // Example total items

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Example data array (could be fetched from an API)
    const data = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);

    const currentItems = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="app">
            <ul>
                {currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <Pagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default App;
