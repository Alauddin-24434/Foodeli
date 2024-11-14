import { FaHome, FaStore, FaUtensils, FaInfoCircle, FaPhone, FaAd } from "react-icons/fa";

export const navbarData = [
    {
        title: "Home",
        href: "/",
        icon: <FaHome className="w-5 h-5" />,
        cname: "border-t font-medium w-full flex justify-center items-center p-2.5 md:border-none md:p-0 md:w-auto hover:text-[#EB0029] active:text-[#EB0029]"
    },
   

    {
        title: "Food Menu",
        href: "/food-items",
        icon: <FaUtensils className="w-5 h-5" />,
        cname: "border-t font-medium w-full flex justify-center items-center p-2.5 md:border-none md:p-0 md:w-auto hover:text-[#EB0029] active:text-[#EB0029]"
    },
    {
        title: "About us",
        href: "/about-us",
        icon: <FaInfoCircle className="w-5 h-5" />,
        cname: "border-t font-medium w-full flex justify-center items-center p-2.5 md:border-none md:p-0 md:w-auto hover:text-[#EB0029] active:text-[#EB0029]"
    },
    {
        title: "Contact",
        href: "/contact",
        icon: <FaPhone className="w-5 h-5" />,
        cname: "border-t border-b font-medium w-full flex justify-center items-center p-2.5 md:border-none md:p-0 md:w-auto hover:text-[#EB0029] active:text-[#EB0029]"
    },
    {
        title: "Ad",
        href: "/ad",
        icon: <FaAd className="w-5 h-5" />,
        cname: "border-t font-medium w-full flex justify-center items-center p-2.5 md:border-none md:p-0 md:w-auto hover:text-[#EB0029] active:text-[#EB0029]"
    }
];
