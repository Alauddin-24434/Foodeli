import Container from "../../shared/container/Container";
import SectionName from "../../shared/SectionName/SectionName";

const Menu = () => {
    const foodItems = [
        {
            name: "Burger",
            category:"burger",
            imageIcon: 'https://randomuser.me/api/portraits/women/2.jpg',
            image: '/public/images/food.png'
        },
        {
            name: "Pizza",
            category:"Pizza",
            imageIcon: 'https://randomuser.me/api/portraits/women/2.jpg',
            image: '/public/images/food.png'
        },
    
        {
            name: "Cupcake",
            category:"Cupcake",
            imageIcon: 'https://randomuser.me/api/portraits/women/2.jpg',
            image: '/public/images/food.png'
        },
        {
            name: "Ramen",
            category:"Ramen",
            imageIcon: 'https://randomuser.me/api/portraits/women/2.jpg',
            image: '/public/images/food.png',

        },
   
        {
            name: "ice Cream",
            category:"ice Cream",
            imageIcon: 'https://randomuser.me/api/portraits/women/2.jpg',
            image: '/public/images/food.png'
        },
   
    

    ]


    
    

    return (

        <Container>
            <div className="flex flex-col gap-y-8">
            <div>
                <SectionName
                    title="OUR MENU"
                    subTitle='Menu That Always | Makes You Fall In Love'  // Use '|' to indicate line break
                    titleClassName="text-[#EB0029] "
                    subTitleClassName='text-[45px] font-bold leading-[58px] '
                />



            </div>



            <div className="flex gap-8 items-center">
                {/* map */}
                <div className="list-none flex flex-col gap-y-6 h-[573px] w-[350px] overflow-y-scroll">
                    {

                        foodItems?.map(item => (<div key={item.name}>
                            <span className="flex items-center  gap-6 w-[200px] hover:border p-4 rounded-full bg-[#EB0029] hover:text-[#ffff] ">
                                <img src={item?.imageIcon} alt="" className="h-8 w-8 rounded-full" />
                                <p>{item.category}</p>
                            </span>
                        </div>))
                    }

                </div>
                <div className=" flex flex-wrap justify-center gap-6 w-full h-[573px]  overflow-y-auto">

                    {/* <img src="" alt="" /> */}

                    {

                        foodItems?.map(item  => (
                            <span key={item.name} className="relative overflow-hidden   w-[250px] h-[300px] rounded-xl">
                                <img src="/public/images/food.png" alt="" className="h-[300px] w-[250px] rounded-xl" />
                                <p className="absolute bottom-14 left-4 text-[#fff] font-medium ">Italian Pizza</p>
                                <p className="absolute bottom-8 left-4 text-[#fff] font-bold ">$ 7.29</p>
                                <button className="absolute bottom-2 left-4 text-[#fff]">Order Now</button>
                            </span>))
                    }









                </div>


            </div>

        </div>
        </Container>
    );
};

export default Menu;