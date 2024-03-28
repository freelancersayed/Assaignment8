import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Book = ({book}) => {
    return (
        <div>
           <Link to={`/book/${book.id}`}>
           <div className="justify-center items-center border rounded-lg p-6 border-gray-500 space-y-5">
                <div className=" h-60 p-4 bg-gray-700 justify-center flex rounded-md">
                <img className="h-full"  src={book.image} alt="" />
                </div>
                <div className="flex justify-between text-green-500">
                    <p>{book.tags[0]}</p>
                    <p>{book.tags[1]}</p>
                </div>
                <h1 className="text-3xl font-bold">{book.bookName}</h1>
                <p>By : {book.author}</p>
                <div className="flex justify-between">
                    <p>{book.publisher}</p>
                    <p>{book.rating} <FontAwesomeIcon icon={faStar} /></p>         
                </div>
            </div>
           </Link>
        </div>
    );
};

export default Book;