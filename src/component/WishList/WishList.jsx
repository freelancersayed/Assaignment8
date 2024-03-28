import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../LocalStoreg/LocalStoreg";
import { getStoredBooksWish } from "../LocalStoreg/LocalStoregWish";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faFileLines,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const WishList = () => {
  const books = useLoaderData();
  const [wish, setWish] = useState([]);

  useEffect(() => {
    const storedBookId = getStoredBooksWish();
    if (books.length > 0) {
      const bookApplied = [];
      for (const id of storedBookId) {
        const book = books.find((book) => book.id === id);
        if (book) {
          bookApplied.push(book);
        }
      }
      setWish(bookApplied);
    }
  }, []);

  return (
    <div className="mt-4 my- ">
      <div>
        {wish.map((wish) => (
          <div className="flex gap-4 bg-gray-700 mb-2 p-4 border rounded-lg p-2 ">
            <div className=" p-6 bg-gray-500 p-6  h-52 w-72 rounded-lg  justify-center flex">
              <img className="h-full" src={wish.image} alt="" />
            </div>
            <div className="flex-1 text-1xl space-y-4">
              <h1 className="text-4xl font-bold">{wish.bookName}</h1>
              <p>By : {wish.author}</p>
              <div className="flex gap-6 text-green-500">
                <p className="text-white font-bold">Tag {}</p>
                <p>{wish.tags[0]}</p>
                <p>{wish.tags[1]}</p>
                <p className="text-white">
                  <FontAwesomeIcon icon={faLocationDot} />{" "}
                  <span>Year of Publishing: </span> {wish.yearOfPublishing}
                </p>
              </div>
              <div className="flex gap-10">
                <p>
                  <FontAwesomeIcon icon={faUserGroup} /> publisher :{" "}
                  {wish.publisher}
                </p>
                <p>
                  <FontAwesomeIcon icon={faFileLines} /> Page :{" "}
                  {wish.totalPages}
                </p>
              </div>
              <hr />
              <div className="flex gap-8">
                <p className="p-2 bg-[#03afff59] text-white font-bold px-6 rounded-2xl">
                  category : {wish.category}
                </p>
                <p className="p-2 bg-[#ffaf042a] text-orange-500 font-bold rounded-2xl px-6">
                  Rating : {wish.rating}
                </p>
                <Link to={`/book/${wish.id}`}>
                  <button className="bg-green-600 px-4 py-2 rounded-2xl text-white font-bold">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
