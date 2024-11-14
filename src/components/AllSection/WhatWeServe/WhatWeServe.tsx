import React from 'react';
import SectionName from "../../shared/SectionName/SectionName";

const WhatWeServe: React.FC = () => {
    return (
        <div className='py-10 sm:py-16 md:py-20'>
            <SectionName
                title="WHAT WE SERVE"
                subTitle='Your Favourite Food | Delivery Partner'
                titleClassName="text-[#EB0029] text-center"
                subTitleClassName='text-2xl sm:text-[35px] md:text-[45px] font-bold leading-tight md:leading-[58px] text-center'
            />
            <div className='flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 mt-8 sm:mt-10'>
                <div className='flex flex-col items-center w-full max-w-[300px] sm:max-w-[351px]'>
                    <img src="/public/images/Order food-pana 1.png" className='w-[180px] sm:w-[232px] h-auto' alt="Easy To Order" />
                    <p className='text-lg sm:text-[24px] md:text-[28px] font-bold text-center mt-4 sm:mt-5'>Easy To Order</p>
                    <p className='text-center text-sm sm:text-base md:text-lg'>You only need a few steps in <br className="hidden sm:block" /> ordering food</p>
                </div>
                <div className='flex flex-col items-center w-full max-w-[300px] sm:max-w-[351px]'>
                    <img src="/public/images/Take Away-rafiki 1.png" className='w-[180px] sm:w-[232px] h-auto' alt="Fastest Delivery" />
                    <p className='text-lg sm:text-[24px] md:text-[28px] font-bold text-center mt-4 sm:mt-5'>Fastest Delivery</p>
                    <p className='text-center text-sm sm:text-base md:text-lg'>Delivery that is always on time <br className="hidden sm:block" /> even faster</p>
                </div>
                <div className='flex flex-col items-center w-full max-w-[300px] sm:max-w-[351px]'>
                    <img src="/public/images/Waiters-rafiki 1.png" className='w-[180px] sm:w-[232px] h-auto' alt="Best Quality" />
                    <p className='text-lg sm:text-[24px] md:text-[28px] font-bold text-center mt-4 sm:mt-5'>Best Quality</p>
                    <p className='text-center text-sm sm:text-base md:text-lg'>Not only fast; quality is also <br className="hidden sm:block" /> number one</p>
                </div>
            </div>
        </div>
    );
};

export default WhatWeServe;
