import Container from "../container/Container";

const Navbar = () => {
    return (
        <Container>

       
            {/* <!-- component --> */}
            <nav >
                <div className="md:h-16 h-28  pt-[76px] mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div className="flex gap-4 items-center w-[160px] h-[50px]">
                        <div className="bg-[#EB0029] w-[45px] h-[45px] flex flex-col items-center justify-center  text-white font-bold text-sm leading-none">
                            <span className="flex gap-1">F&nbsp;O</span>
                            <span className="flex gap-1">O&nbsp;D</span>
                        </div>
                        <p className="text-2xl font-semibold tracking-wide text-[#EB0029]">Foodeli</p>
                    </div>

                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between">
                            {/* <!-- Active Link = text-indigo-500 */}
                            {/* Inactive Link = hover:text-indigo-500 --> */}
                            <li className="md:px-4 md:py-2 text-[#EB0029]"><a href="#">Why Foodeli?</a></li>
                            <li className="md:px-4 md:py-2 hover:text-[#EB0029]"><a href="#">Services</a></li>
                            <li className="md:px-4 md:py-2 hover:text-[#EB0029]"><a href="#">Contact</a></li>

                        </ul>
                    </div>
                    <div className="order-2 md:order-3">
                        <button className="px-4 py-2 bg-[#EB0029] hover:bg-[#EB0029] text-gray-50 rounded-xl flex items-center gap-2">
                            {/* <!-- Heroicons - Login Solid --> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span>Login</span>
                        </button>
                    </div>
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;