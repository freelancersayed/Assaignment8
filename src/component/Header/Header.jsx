import { NavLink } from "react-router-dom";

const Header = () => {
  const links = <>
      
   <ul className="flex gap-6 ">
 <NavLink to="/"  className={({isActive}) => isActive ? 'text-red-600 font-bold rounded-md px-4 py-2 bg-gray-950 ' : 'rounded-md font-bold px-4 py-2 bg-gray-900'}>Home</NavLink>
 <NavLink to='/redFilter/onlyread' className={({isActive})=> isActive? ' rounded-md text-red-600 font-bold px-4 py-2 bg-gray-950 ' : 'rounded-md font-bold px-4 py-2 bg-gray-900'}>Listed Books</NavLink>
 <NavLink to="/chart"  className={({isActive})=> isActive ? 'text-red-600 font-bold px-4 py-2 bg-gray-950 rounded-md' : 'rounded-md font-bold px-4 py-2 bg-gray-900'}>Pages to Read</NavLink>

   </ul>
    </>


  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">বই মেলা</a>
        </div>
        <div className="navbar-center hedden lg:flex">
          <ul className="menu menu-horizontal items-center px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          <a className="px-4 py-2 rounded-md bg-green-700">Sing In</a>
          <a className="px-4 py-2 rounded-md bg-blue-600">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
