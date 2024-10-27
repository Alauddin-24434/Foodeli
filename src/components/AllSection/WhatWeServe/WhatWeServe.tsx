import React from 'react';
import SectionName from "../../shared/SectionName/SectionName";

const WhatWeServe: React.FC = () => {
    return (
        <div>
            <SectionName
                title="WHAT WE SERVE"
                subTitle='Your Favourite Food | Delivery Partner'  // Use '|' to indicate line break
                titleClassName="text-[#EB0029] text-center"
                subTitleClassName='text-[45px] font-bold leading-[58px] text-center'
            />
            <div className='flex items-center justify-between h-[351px]'>
                <div className='flex flex-col items-center w-[351px]'>
                    <img src="/public/images/Order food-pana 1.png" className='w-[232px] h-[205px]' alt="orderfood" />
                    <p className='text-[28px] font-bold'>Easy To Order</p>
                    <p className='text-center'>You only need a few steps in <br /> ordering food</p>
                </div>
                <div className='flex flex-col items-center w-[351px]'>
                    <img src="/public/images/Take Away-rafiki 1.png" className='w-[232px] h-[205px]' alt="orderfood" />
                    <p className='text-[28px] font-bold'>Fastest Delivery</p>
                    <p className='text-center'>Delivery that is always ontime <br /> even faster</p>
                </div>
                <div className='flex flex-col items-center w-[351px]'>
                    <img src="/public/images/Waiters-rafiki 1.png" className='w-[232px] h-[205px]' alt="orderfood" />
                    <p className='text-[28px] font-bold'>Best Quality</p>
                    <p className='text-center'>Not only fast for us quality is also <br /> number one</p>
                </div>
            </div>
        </div>
    );
};

export default WhatWeServe;
