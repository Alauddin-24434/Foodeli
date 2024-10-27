
import Container from "../../shared/container/Container";
import SectionName from "../../shared/SectionName/SectionName";


const CutomerRevew = () => {
    return (
        <Container>

            <div className="flex  items-center py-24">
                {/*left side  */}
                <div className="w-[669px] h-[650px] relative   flex items-center justify-center">
                    <img
                        src="/public/images/Rectangle 4.png"
                        alt="bannar-1"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
                    />
                    <img
                        src="/public/images/chef-holding-vegetables 1.png"
                        alt="bannar-1"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                    />


                    <img
                        src="/public/images/onion-2.png"
                        alt="banner-1"
                        className="absolute top-10 left-8"
                        style={{ transform: 'rotate(-52deg)' }}
                    />

                    <img
                        src="/public/images/onion-1.png"
                        alt="bannar-1"
                        className="absolute  top-12 left-16 "
                    />

                    <img
                        src="/public/images/pata-1.png"
                        alt="bannar-2"
                        className="absolute top-0 right-24  z-30"
                    />
                    <img
                        src="/public/images/pata.png"
                        alt="bannar-2"
                        className="absolute top-0 right-4  z-30"
                    />
                    <img
                        src="/public/images/popcorn.png"
                        alt="bannar-2"
                        className="absolute top-1/2 transform -translate-y-1/2 left-20 -translate-x-1/2  z-30"
                    />

                    <div className="absolute -bottom-20 right-0 z-30 w-[263px] h-[161px] bg-white shadow-xl rounded-3xl p-4 flex flex-col items-center">
                        <p className="text-xl font-semibold mb-3">Our Reviewers</p>
                        <div className="flex -space-x-2">
                            <img className="inline-block size-[46px] rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
                            <img className="inline-block size-[46px] rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
                            <img className="inline-block size-[46px] rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Avatar" />
                            <img className="inline-block size-[46px] rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
                            <div className="hs-dropdown [--placement:top-left] relative inline-flex">
                                <button id="hs-avatar-group-dropdown" className="hs-dropdown-toggle inline-flex items-center justify-center size-[46px] rounded-full bg-gray-100 border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-200 focus:outline-none focus:bg-gray-300 text-sm dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:border-neutral-800" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    <span className="font-medium leading-none">9+</span>
                                </button>

                                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700" role="menu" aria-orientation="vertical" aria-labelledby="hs-avatar-group-dropdown">
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                                        Chris Lynch
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                                        Maria Guan
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                                        Amil Evara
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                                        Ebele Egbuna
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* right side */}
                <div className="w-[594px]  flex flex-col gap-y-7">
                    <SectionName
                        title="WHAT THEY SAY"
                        subTitle='What Our Customers | Say About Us'  // Use '|' to indicate line break
                        description="“Fudo is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. I highly recommend Fudo  to you”."
                        titleClassName="text-[#EB0029]"
                        subTitleClassName='text-[45px] font-bold leading-[58px]'
                        descClassName="font-medium"
                    />


                </div>


            </div>
        </Container>
    );
};

export default CutomerRevew;