import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faChartColumn} from "@fortawesome/free-solid-svg-icons";


import { useEffect, useState } from "react";
import Chart from "./Chart";
import { Outlet, useLoaderData } from "react-router-dom";
import { getStoredBooks, saveBooks } from "../LocalStoreg/LocalStoreg";

// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const ListedBooks = () => {
    const [chart, setChart] = useState();

    const books = useLoaderData()
    // setChart(books)





  return (
    <div>
      <h1 className="text-5xl text-green-600  text-center font-bold bg-gray-700 p-7"><FontAwesomeIcon icon={faChartLine} /> Pages to read </h1>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ListedBooks;
