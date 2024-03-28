import React, { useEffect, useState } from "react";
import { getStoredBooks } from "../LocalStoreg/LocalStoreg";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { useLoaderData } from "react-router-dom";

const Chart = () => {
const books = useLoaderData();

const [read, setReadBooks] = useState([]);

useEffect(() =>{
  const storedBookId = getStoredBooks();
  if(books.length > 0){
    const bookApplied = [];
    for(const id of storedBookId){
      const book = books.find((book)=> book.id === id);
      if(book){
        bookApplied.push(book)
      }
    }
    setReadBooks(bookApplied)
  }
},[books])

console.log(read);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="mt-20 justify-center flex border py-10 rounded-lg bg-gray-800
    ">
      <BarChart   
      width={700}
      height={400}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
       data={read} >
        <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis  />
        <Bar dataKey="totalPages" fill="#8884d8"
        shape={<TriangleBar />} label={{ position: 'top' }}
        >
           {read.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
         </Bar>
      </BarChart>
    </div>
  );
};

export default Chart;
