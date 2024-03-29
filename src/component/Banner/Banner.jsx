import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className=" bg-gray-700 py-10 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around gap-10">
          <img
            src="https://i.ibb.co/rwBPzmv/OIP.jpg"
            className="max-w-[200px] rounded-lg shadow-2xl"
          />
          <div className="space-y-10 lg:w-2/4">
            <h1 className="text-5xl font-bold mb-6">Books to freshen up your bookshelf!</h1>
            <Link to={'/chart'}>
            <button className="btn bg-green-600 text-white font-bold outline-none border-none">View The List</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
