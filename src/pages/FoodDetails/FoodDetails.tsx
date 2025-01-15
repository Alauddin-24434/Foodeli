import { useParams } from "react-router-dom";
import Container from "../../components/shared/container/Container";
import { useFindFoodItemByIdQuery } from "../../redux/features/foodItems/foodItemsApi";
import FoodDetailsTopCard from "../../components/Cards/FoodDetails/FoodDetailsTopCard";
import FoodDetailsReviewSection from "../../components/Cards/FoodDetails/FoodDetailsReviewSection";
import Loader from "../../Loader/Loader";

const FoodDetails = () => {
    // id access 
    const { id } = useParams();

    // Fetching food item data using the query
    const { data, isLoading, isError } = useFindFoodItemByIdQuery(id);
    const foodDetails = data?.data;

    // Conditional rendering based on loading and error states
    if (isLoading) {
        return (
            <Container>
                <div className="flex justify-center items-center h-screen">
                    <Loader /> {/* Show the loader component */}
                </div>
            </Container>
        );
    }

    if (isError) {
        return (
            <Container>
                <div className="flex justify-center items-center h-screen">
                    <h2 className="text-xl font-semibold text-red-600">Error loading food details. Please try again later.</h2>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div className="font-sans mt-20">
                <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                    {/* Food Details Top Card */}
                    <FoodDetailsTopCard foodDetails={foodDetails} />
                    <hr />
                    {/* Food Details Review Section */}
                    <FoodDetailsReviewSection foodDetails={foodDetails}  productId={id as string}  />
                </div>
            </div>
        </Container>
    );
};

export default FoodDetails;
