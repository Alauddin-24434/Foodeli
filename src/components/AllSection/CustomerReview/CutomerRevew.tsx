import Container from "../../shared/container/Container";
import SectionName from "../../shared/SectionName/SectionName";

const CustomerReview = () => {
    return (
        <Container>
            <div className="flex flex-col-reverse md:flex-row items-center py-20">
                  {/* Left Side */}
                  <div className="w-full md:w-[669px] h-[650px] relative flex items-center justify-center mb-10 md:mb-0">
                    <img
                        src="/public/images/Rectangle 4.png"
                        alt="banner-1"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
                    />
                    <img
                        src="/public/images/chef-holding-vegetables 1.png"
                        alt="banner-2"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                    />
                    <img
                        src="/public/images/onion-2.png"
                        alt="onion-2"
                        className="absolute top-10 left-8"
                        style={{ transform: 'rotate(-52deg)' }}
                    />
                    <img
                        src="/public/images/onion-1.png"
                        alt="onion-1"
                        className="absolute top-12 left-16"
                    />
                    <span className="w-3 h-3 bg-[#F2C94C] absolute top-6 left-1/3" style={{ transform: 'rotate(25deg)' }}></span>
                    <img
                        src="/public/images/pata-1.png"
                        alt="pata-1"
                        className="absolute top-0 right-24 z-30"
                    />
                    <img
                        src="/public/images/pata.png"
                        alt="pata"
                        className="absolute top-0 right-4 z-30"
                    />
                    <img
                        src="/public/images/popcorn.png"
                        alt="popcorn"
                        className="absolute top-1/2 transform -translate-y-1/2 left-20 -translate-x-1/2 z-30"
                    />
                    <span className="w-3 h-3 bg-[#F2C94C] rounded-full absolute bottom-4 left-6"></span>
                    <div className="absolute -bottom-20 right-0 z-30 w-[263px] h-[161px] bg-white shadow-xl rounded-3xl p-4 flex flex-col items-center">
                        <p className="text-xl font-semibold mb-3">Our Reviewers</p>
                        <div className="flex -space-x-2">
                            {/* Reviewer Avatars */}
                            <img className="inline-block h-11 w-11 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
                            <img className="inline-block h-11 w-11 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
                            <img className="inline-block h-11 w-11 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Avatar" />
                            <img className="inline-block h-11 w-11 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
                            <div className="hs-dropdown relative inline-flex">
                                <button className="hs-dropdown-toggle inline-flex items-center justify-center h-11 w-11 rounded-full bg-[#EB0029] border-2 border-white font-medium text-white hover:bg-gray-200 focus:outline-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    <span className="font-medium leading-none">9+</span>
                                </button>
                                <div className="hs-dropdown-menu w-48 hidden z-10 transition-opacity duration-300 mb-2 bg-white shadow-md rounded-lg p-2">
                                    {/* Additional Reviewer List */}
                                    <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100" href="#">Chris Lynch</a>
                                    <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100" href="#">Maria Guan</a>
                                    <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100" href="#">Amil Evara</a>
                                    <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100" href="#">Ebele Egbuna</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="w-full md:w-[594px] flex flex-col justify-start">
                    <SectionName
                        title="WHAT THEY SAY"
                        subTitle="What Our Customers | Say About Us"
                        titleClassName="text-[#EB0029]"
                        subTitleClassName="text-[40px] md:text-[45px] font-bold leading-[54px] md:leading-[58px]"
                    />

                    <div className="flex flex-col justify-between rounded-md p-8 bg-white shadow-xl max-w-sm ">
                        {/* Stars */}
                        <div className="text-violet-500 flex gap-2">
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="text-[#F2C94C]" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                            ))}
                        </div>

                        <p className="my-4 mb-0 text-base font-medium leading-relaxed tracking-wide text-gray-400">
                            Fudo is the best. Besides the many delicious meals, the service is also very good, especially the fast delivery. I highly recommend Fudo to you.
                        </p>

                        <div className="mt-6 flex items-center gap-6">
                            <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                                <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                                    <img alt="" src="https://randomuser.me/api/portraits/men/1.jpg" className="object-cover w-full h-full" />
                                </div>
                            </div>
                            <div>
                                <p className="text-base font-semibold">John Doe</p>
                                <p className="text-sm text-gray-500">Customer</p>
                            </div>
                        </div>
                    </div>
                </div>

              
            </div>
        </Container>
    );
};

export default CustomerReview;
