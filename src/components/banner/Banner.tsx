import { Link } from "react-router-dom";
import Container from "../shared/container/Container";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

const Banner = () => {
    return (
        <Container>
            <div className="flex flex-col md:flex-row items-center  min-h-[70vh] ">
                {/* Left Side */}
                <div className="flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-4 w-full md:w-1/2 px-4 sm:px-6 lg:px-8">
                    <h1 className="leading-7 sm:leading-8 md:leading-[85px] sm:text-center md:text-left">
                        <span className="text-2xl sm:text-3xl md:text-[55px] lg:text-[55px] font-bold text-gray-800">Claim Best Offer on Fast </span>
                        <span className="text-2xl sm:text-4xl md:text-[60px] lg:text-[60px] font-bold italic text-primary">Food</span>
                        <span className="text-2xl sm:text-3xl md:text-[55px] lg:text-[55px] font-bold text-gray-800"> & </span>
                        <span className="text-2xl sm:text-4xl md:text-[60px] lg:text-[60px] font-bold italic text-primary">Restaurants</span>
                    </h1>
                    <p className="sm:text-center md:text-left text-sm sm:text-base lg:text-lg font-normal">
                        Our job is to fill your tummy with delicious food <br className="hidden sm:block" />
                        with fast and free delivery
                    </p>
                    {/* Buttons */}
                    <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-7 mt-4">
                        <Link to={'/food-items'}>
                            <button className="button-primary ">
                            Explore Our Menu
                            </button>
                        </Link>
                        <button className="flex items-center gap-2  border border-secondary p-2 rounded-md hover:bg-slate-50">
                            <span className="text-secondary">
                                <MdOutlinePlayCircleFilled className="text-2xl " />
                            </span>
                            Watch Video
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/2 flex justify-center px-4 sm:px-6 lg:px-8 mt-6 md:mt-0">
                    <img src="/images/banner-1.png" alt="banner-1" className="object-cover h-auto max-w-[90%] sm:max-w-[80%] md:max-w-full" />
                </div>
            </div>
        </Container>
    );
};

export default Banner;
