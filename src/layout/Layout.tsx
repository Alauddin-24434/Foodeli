import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Layout = () => {
    return (
        <div className="">
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer/>
            
        </div>
    );
};

export default Layout;