import { Link } from "react-router-dom";
import Container from "../../components/shared/container/Container"

const AboutUs = () => {
    return (
        <Container>
            <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
                <div className="container mx-auto">
                    <div className="flex  items-center ">
                        <div className="w-full px-4">
                            <div className="flex flex-row gap-4">

                                <img className="h-[560px] w-[320px] rounded-full" src="https://img.freepik.com/free-photo/vertical-shot-delicious-chocolate-cake-plate-some-pieces-chocolate_181624-29595.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722384000&semt=ais_hybrid" alt="" />
                                <div className="flex flex-col gap-4">
                                    <img className="h-[270px] w-[280px] rounded-t-full rounded-br-full rounded-bl-3xl" src="https://bhukkadcompany.com/wp/wp-content/uploads/2024/06/21-Best-Pizzas-in-Mumbai-You-Must-Try-A-Pizza-Lovers-Paradise-1-710x473.png" alt="" />
                                    <img className="h-[270px] w-[280px] rounded-br-full rounded-tr-full rounded-bl-full" src="https://bhukkadcompany.com/wp/wp-content/uploads/2024/06/21-Best-Pizzas-in-Mumbai-You-Must-Try-A-Pizza-Lovers-Paradise-1-710x473.png" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* Text Section */}
                        <div className="w-full px-4 ">
                            <div className="mt-10 lg:mt-0 flex flex-col gap-4">
                                <span className="block mb-4 text-lg font-semibold text-primary">
                                    Why Choose Us
                                </span>
                                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                    Experience the Art of Culinary Excellence.
                                </h2>
                                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                    We believe that great food starts with fresh ingredients and a
                                    passion for cooking. Every dish we create is crafted with care,
                                    bringing flavor and satisfaction to your table.
                                </p>

                                <div className="grid grid-cols-2 gap-4 ">
                                    <span className="h-[60px] w-[270px] border flex justify-center items-center gap-2"> <span className="text-primary">90%</span>Repeat Customer</span>
                                    <span className="h-[60px] w-[270px] border flex justify-center items-center gap-2"><span className="text-primary">94%</span>Freshness & Quality</span>
                                    <span className="h-[60px] w-[270px] border flex justify-center items-center gap-2"><span className="text-primary">20 min</span>Min. Delivery Time</span>
                                    <span className="h-[60px] w-[270px] border flex justify-center items-center gap-2"><span className="text-primary">500+</span>Positive Review</span>
                                </div>

                                <Link to={'/food-items'}>
                                    <button className="button-primary ">
                                        Explore Our Menu
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>


    );
};

export default AboutUs;