import { useEffect, useState } from "react";
import Book from "./Book";


const BookFetch = () => {
    const [books, setBook] = useState([]);

    useEffect(()=>{
        fetch('/public/Json.json')
        .then(res => res.json())
        .then(data => setBook(data))
    },[])

    // console.log(books);
    return (
        <div>
          
            <div className="grid md:grid-cols-3 gap-10 justify-between items-center my-4">
             {
                books.map(book => <Book book={book}></Book>)
             }
               
            </div>
          
        </div>
    );
};

export default BookFetch;