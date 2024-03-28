import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faTriangleExclamation, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center items-center mt-32">
          <div className="text-center ">
          {/* <FontAwesomeIcon className="text-9xl"  icon={faTriangleExclamation} /> */}
          {/* <FontAwesomeIcon className="text-9xl" icon={faFaceFrown} /> */}
          <h1 className="text-9xl font-bold">404</h1>
            <p className="text-4xl text-red-700 mt-10 font-bold">Not Found <FontAwesomeIcon icon={faMagnifyingGlass} /></p>
            <p className="text-2xl text-white mt-5">Oops! That page can't be found.</p>
            <NavLink to="/"> <button className="border border-green-500 text-green-500  px-4 rounded-xl bg-gray-90 mt-20">Back to Go Home</button></NavLink>
          </div>
        </div>
    );
};

export default Error;