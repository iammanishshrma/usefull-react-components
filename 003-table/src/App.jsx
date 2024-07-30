import React from "react";
import Table from "./components/table";

const App = () => {
    const columns = [
        { Header: "Name", accessor: "name" },
        { Header: "Age", accessor: "age" },
        { Header: "Country", accessor: "country" },
    ];

    const data = [
        { name: "John Doe", age: 28, country: "USA" },
        { name: "Jane Smith", age: 34, country: "Canada" },
        { name: "Sam Johnson", age: 23, country: "UK" },
    ];

    return (
        <div className="App">
            <h1>Data Table with Sorting</h1>
            <Table columns={columns} data={data} />
        </div>
    );
};

export default App;
