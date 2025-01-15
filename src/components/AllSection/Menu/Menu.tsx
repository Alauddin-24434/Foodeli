import { Link } from "react-router-dom";
import Container from "../../shared/container/Container";
import SectionName from "../../shared/SectionName/SectionName";
import { useFindFoodCategoryQuery } from "../../../redux/features/foodItems/foodItemsApi";

export interface CartItem {
  _id: string;
  category: string;
  thumbnailImage: string;
}

const Menu = () => {
  const { data, isLoading } = useFindFoodCategoryQuery(undefined);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <SectionName
          title="OUR MENU"
          subTitle="The Love Affair Menu"
          titleClassName="block text-lg font-bold text-primary "
          subTitleClassName="text-3xl font-bold text-gray-800 dark:text-white sm:text-[40px]/[48px]"
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {data?.data?.map((cat: CartItem) => (
              <Link
                key={cat._id}
                to={`/food-items?category=${cat.category}`}
                className="group bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <img
                    src={cat.thumbnailImage}
                    alt={cat.category}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                    <h3 className="text-white text-lg font-semibold text-center">
                      {cat.category}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Menu;
