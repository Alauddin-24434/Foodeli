import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
            
        </div>
    );
};

export default Layout;