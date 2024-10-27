import Container from "../shared/container/Container";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

const Banner = () => {
    return (
        <Container>

            <div className="flex  items-center py-20">

                {/*left side  */}
                <div className="w-[594px] h-[429px] flex flex-col gap-y-7">
                    <h1 className="leading-[85px]">
                        <span className="text-[67px] font-bold">Claim Best Offer on Fast </span>
                        <span className="text-[80px] font-bold italic text-[#EB0029]">Food</span>
                        <span className="text-[67px] font-bold"> & </span>
                        <span className="text-[80px] font-bold italic text-[#EB0029]">Restaurants</span>
                    </h1>
                    <p className="text-lg font-medium">Our job is to filling your tummy with delicious food <br /> and  with fast and free delivery</p>
                    {/*  button*/}
                    <div className="flex items-center gap-7">
                        <button className="w-[186px] h-[68px] bg-[#EB0029] text-lg font-medium text-[#ffff] rounded-full">Get Started</button>
                        <button className="flex items-center gap-2"> <span className="text-[#F2C94C] "><MdOutlinePlayCircleFilled className="text-[46px] " /></span> Watch Video</button>
                    </div>
                </div>

                {/* right side */}
                <div className="w-[669px] h-[650px]">
        
               
                  
                    <img src="/public/images/banner-1.png" alt="bannar-1" />
                     
                </div>
            </div>
        </Container>
    );
};

export default Banner;