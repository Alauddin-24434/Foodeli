import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
            {/* Header */}
            <Header />

            <div className="flex">
                {/* Sidebar */}
                <Sidebar />

                {/* Main content */}
                <main className="flex-grow h-full ml-14 mt-14 mb-10 md:ml-64">
                    {/* Outlet for nested routes */}

                        <Outlet />
                    
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
