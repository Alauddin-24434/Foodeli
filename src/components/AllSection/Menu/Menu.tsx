import { Link } from "react-router-dom";
import { FaPizzaSlice, FaUtensils, FaHamburger, FaCookie, FaFish, FaIceCream } from "react-icons/fa";
import { RiCake3Fill } from "react-icons/ri";
import { MdRamenDining } from "react-icons/md";
import Container from "../../shared/container/Container";
import SectionName from "../../shared/SectionName/SectionName";

const Menu = () => {
    const categories = [
        { id: 1, name: 'Pizza', icon: <FaPizzaSlice size={32} /> },
        { id: 2, name: 'Pasta', icon: <FaUtensils size={32} /> },
        { id: 3, name: 'Burger', icon: <FaHamburger size={32} /> },
        { id: 4, name: 'Snacks', icon: <FaCookie size={32} /> },
        { id: 5, name: 'Desserts', icon: <FaIceCream size={32} /> },
        { id: 6, name: 'Seafood', icon: <FaFish size={32} /> },
        { id: 7, name: 'Cupcake', icon: <RiCake3Fill size={32} /> },
        { id: 8, name: 'Ramen', icon: <MdRamenDining size={32} /> },
        { id: 9, name: 'Ice Cream', icon: <FaIceCream size={32} /> },
    ];

    return (
        <Container>
            <div className="flex flex-col gap-y-8">
                <SectionName
                    title="OUR MENU"
                    subTitle='Menu That Always Makes | You Fall In Love'
                    titleClassName="text-[#EB0029] text-center"
                    subTitleClassName="text-[30px] sm:text-[35px] md:text-[45px] font-bold leading-tight text-center"
                />
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                        {categories.map(category => (
                            <Link key={category.id} to={`/food-items?category=${category.name}`}>
                                {/* card */}
                                <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg bg-gray-100 p-3 sm:p-4 transition duration-200 ease-in-out hover:bg-[#EB0029] hover:text-white group">
                                    <div className="text-[#EB0029] group-hover:text-white transition duration-200 ease-in-out">
                                        {category.icon}
                                    </div>
                                    <div className="text-center mt-2">
                                        <h3 className="text-sm sm:text-lg font-semibold group-hover:text-white">{category.name}</h3>
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
