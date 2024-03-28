
import { useEffect, useState } from "react";
import Chart from "./Chart";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks, saveBooks } from "../LocalStoreg/LocalStoreg";

// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const ListedBooks = () => {
    const [chart, setChart] = useState();

    const books = useLoaderData()
    // setChart(books)





  return (
    <div>
      <h1 className="text-5xl text-center font-bold bg-gray-700 p-7"> chart {books.length} </h1>
      <div>
        

        {
            books.map(book => <Chart book={book}></Chart>)
        }
      </div>
    </div>
  );
};

export default ListedBooks;
