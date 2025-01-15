import { Link } from "react-router-dom";
import chefImage from '../../../../public/images/whyChoseUs/chef.jpg';
import burgerImage from '../../../../public/images/whyChoseUs/burger.jpg';
import sandWitchImage from '../../../../public/images/whyChoseUs/sandwitch.jpg';
const WhyChooseUs = () => {
  return (
    <section className="overflow-hidden lg:pb-[90px] my-8 dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="flex flex-row lg:flex-row gap-4">
              <img
                className="h-[300px] lg:h-[560px] w-[200px] lg:w-[320px] rounded-full object-cover"
                src={chefImage}
                alt="Chef Image"
              />
              <div className="flex flex-col gap-4">
                <img
                  className="h-[140px] lg:h-[270px] w-[140px] lg:w-[280px] rounded-t-full rounded-br-full rounded-bl-3xl object-cover"
                  src={burgerImage}
                  alt="Burger"
                />
                <img
                  className="h-[140px] lg:h-[270px] w-[140px] lg:w-[280px] rounded-br-full rounded-tr-full rounded-bl-full object-cover"
                  src={sandWitchImage}
                  alt="Sandwitch"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <div className="mt-6 lg:mt-0 flex flex-col gap-6">
              <span className="block uppercase text-lg font-bold text-primary">
                Why Choose Us
              </span>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-[40px]/[48px]">
                Experience the Art of Culinary Excellence
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                We believe that great food starts with fresh ingredients and a
                passion for cooking. Every dish we create is crafted with care,
                bringing flavor and satisfaction to your table.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <span className="h-[60px] w-full border flex justify-center items-center gap-2 rounded-lg shadow-sm border-gray-800">
                  <span className="text-primary font-bold">90%</span> Repeat Customers
                </span>
                <span className="h-[60px] w-full border flex justify-center items-center gap-2 rounded-lg shadow-sm border-gray-800">
                  <span className="text-primary font-bold">94%</span> Freshness & Quality
                </span>
                <span className="h-[60px] w-full border flex justify-center items-center gap-2 rounded-lg shadow-sm border-gray-800">
                  <span className="text-primary font-bold">20 min</span> Min. Delivery Time
                </span>
                <span className="h-[60px] w-full border flex justify-center items-center gap-2 rounded-lg shadow-sm border-gray-800">
                  <span className="text-primary font-bold">500+</span> Positive Reviews
                </span>
              </div>

              <Link to="/why-us">
                <button className="button-primary px-6 py-3 rounded-lg">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
