import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footter/Footer";

const Root = () => {
    return (
        <div>
          <div className="fixed w-[1280px]">
          <Header></Header>
          </div>
          <div className="h-[80px]">

          </div>
            
            <Outlet></Outlet>

            <Footer></Footer> 
        </div>
    );
};

export default Root;