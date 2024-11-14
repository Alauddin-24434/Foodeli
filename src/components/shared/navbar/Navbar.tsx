import { Link, useLocation } from "react-router-dom";
import Container from "../container/Container";
import { useState, useEffect, useRef } from "react";
import { navbarData } from "./NavbarData";
import { useAuthenticateUser } from "../../../hooks/useAuthenticateUser";

const Navbar = () => {
    const location = useLocation();
    const [toggle, setToggle] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const avatarDropdownRef = useRef(null);
    const user = useAuthenticateUser();

    const showNav = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
            if (avatarDropdownRef.current && !avatarDropdownRef.current.contains(event.target)) {
                setAvatarDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Container>
            <nav>
                <div className="md:h-16 h-28 pt-[76px] mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <Link to={'/'}>
                        <div className="flex gap-2 items-center w-[160px] h-[50px] ">
                            <div className="bg-[#EB0029] w-[45px] h-[45px] flex flex-col items-center justify-center text-white font-bold text-sm leading-none rounded-md">
                                <span className="flex gap-1">F&nbsp;O</span>
                                <span className="flex gap-1">O&nbsp;D</span>
                            </div>
                            <p className=" font-medium tracking-wide text-[#EB0029]">Foodeli</p>
                        </div>
                    </Link>
                    <button
                        className="flex justify-end md:hidden ring-1 ring-black rounded"
                        onClick={showNav}
                    >
                        <i className="fas fa-bars text-white w-9 h-9 flex justify-center items-center hover:text-black"></i>
                    </button>

                    <div className={`text-gray-500 order-3 w-full md:w-auto md:order-2 ${toggle ? 'block' : 'hidden'} md:block`}>
                        <ul className={`flex flex-col md:flex-row md:space-x-10 ${toggle ? 'mt-2' : 'hidden md:flex'}`}>
                            {navbarData.map((link, index) => (
                                <li key={index} className={link.cname}>
                                    <Link 
                                        className={`flex items-center ${location.pathname === link.href ? 'text-[#EB0029]' : 'hover:text-[#EB0029]'}`} 
                                        to={link.href} 
                                        onClick={() => setToggle(false)} // Close menu on link click
                                    >
                                        {link.icon}
                                        <span className="ml-2">{link.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="order-2 md:order-3 hidden md:flex items-center space-x-4">
                        <Link to={'/food-shop'}>
                            <div className="relative text-neutral-600 dark:text-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                </svg>
                            </div>
                        </Link>

                        {
                            user ? (
                                <div ref={avatarDropdownRef} className="relative">
                                    <a
                                        className="cursor-pointer"
                                        onClick={() => setAvatarDropdownOpen(!avatarDropdownOpen)}
                                    >
                                        <img src={user?.profileImage} className="w-8 h-8 rounded-full border border-[#EB0029]" alt="" />
                                    </a>
                                    {avatarDropdownOpen && (
                                        <ul className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50">
                                            <li className="px-4 py-2 hover:bg-gray-100">
                                                <Link to={'/dashboard'}>Profile</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100">Settings</li>
                                            <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <Link to="/login">
                                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-[#a8001a] transition-all">
                                        Login
                                    </button>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;
