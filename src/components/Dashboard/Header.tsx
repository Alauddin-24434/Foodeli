

const Header = () => {
    return (
        <div className="fixed w-full flex items-center justify-between h-14 text-white z-10 bg-primary dark:bg-gray-800">
        <div className="flex items-center pl-3 w-14 md:w-64 h-14">
            <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" />
            <span className="hidden md:block">ADMIN</span>
        </div>
        <div className="flex justify-between items-center h-14">
            <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
                <button className="outline-none focus:outline-none">
                    <svg className="w-5 text-gray-600 h-5 cursor-pointer"></svg>
                </button>
                <input type="search" placeholder="Search" className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
            </div>
            <ul className="flex items-center">
                <li>
                    <button aria-hidden="true" className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none">
                        <svg className="w-5 h-5"></svg>
                    </button>
                </li>
                <li>
                    <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
                </li>
                <li>
                    <a href="#" className="flex items-center mr-4 hover:text-blue-100">
                        <span className="inline-flex mr-1">
                            <svg className="w-5 h-5"></svg>
                        </span>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default Header;