import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Link, useLoaderData, useParams } from "react-router-dom";
import { getStoredBooks, saveBooks } from "../LocalStoreg/LocalStoreg";
import {
  getStoredBooksWish,
  saveBooksWish,
} from "../LocalStoreg/LocalStoregWish";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useState } from 'react';

const BookDetails = () => {
  // const [bookAdd, setBookAdd] = useState([]);

  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);
  // console.log(book);

  const storedBookIds = getStoredBooks();
  const storedBookWishIds = getStoredBooksWish();

  const handleRead = () => {
    saveBooks(idInt);
  };

  const handleWish = () => {
    const chack = storedBookIds.find((book) => book == id);
    const chacklis = storedBookWishIds.find((book) => book == id);
    console.log(chack, chacklis);
    if (!chack && !chacklis) {
      saveBooksWish(idInt);
    } else {
      toast.error("Allrady Added!");
    }

    // if (storedBookIds.incudes(idInt)) {
    //   alert("kjf");
    // }
  };

  return (
    <div className="lg:flex gap-6 my-10">
      <div className="flex-1 p-16 bg-gray-800 rounded-lg justify-center flex">
        <img className="w-96" src={book.image} alt="" />
      </div>
      <div className="flex-1 p-6 bg-gray- rounded-lg space-y-3">
        <h1 className="text-4xl font-bold">{book.bookName}</h1>
        <p>By : {book.author}</p>
        <hr />
        <p>{book.category}</p>
        <hr />
        <p>
          <span className="font-bold text-white">Review </span> : {book.review}
        </p>
        <div className="flex">
          <p className="mr-5 font-bold text-white">Tag</p>
          <p className="mr-5 text-green-500">#{book.tags[0]}</p>
          <p className="mr-5 text-green-500">#{book.tags[1]}</p>
        </div>
        <hr />
        <div>
          <table className=" w-96">
            <tr className="">
              <td>Number of Page :</td>
              <td>{book.totalPages}</td>
            </tr>

            <tr className="">
              <td>Publisher :</td>
              <td>{book.publisher}</td>
            </tr>

            <tr className="">
              <td>Year of Publishing :</td>
              <td>{book.yearOfPublishing}</td>
            </tr>

            <tr className="">
              <td>Rating :</td>
              <td>
                {book.rating} {book.rating} <FontAwesomeIcon icon={faStar} />
              </td>
            </tr>
          </table>
          <Link>
            <button
              onClick={handleRead}
              className="btn bg-blue-600 border-none mr-4 my-4"
            >
              Read
            </button>
          </Link>
          <Link>
            <button
              onClick={handleWish}
              className="btn bg-blue-600 border-none mr-4 my-4"
            >
              Wishlist
            </button>
          </Link>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookDetails;
