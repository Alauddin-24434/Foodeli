import { useEffect, useState } from "react";
import { IFoodItem } from "../../../interface/types";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../../redux/features/cart/cartSlice";

import { useAppDispatch } from "../../../redux/hooks/hooks";
import { useAuthenticateUser } from "../../../hooks/useAuthenticateUser";

interface FoodDetailsTopCardProps {
  foodDetails: IFoodItem;
}

const FoodDetailsTopCard = ({ foodDetails }: FoodDetailsTopCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 
  const user = useAuthenticateUser();

  const [currentImage, setCurrentImage] = useState(foodDetails?.thumbnailImage || "");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (foodDetails?.thumbnailImage) {
      setCurrentImage(foodDetails.thumbnailImage);
    }
  }, [foodDetails]);

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
  };

  const handleAddToCart = () => {
    const product = {
      _id: foodDetails._id,
      userId: user?._id,
      name: foodDetails.name,
      category: foodDetails.category,
      price: foodDetails.price,
      thumbnailImage: foodDetails.thumbnailImage,
      quantity,
      isAvailable: foodDetails.isAvailable,
    };
    dispatch(addToCart(product));
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity((prev) => prev - 1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 rounded-lg bg-white shadow-md">
      {/* Left Section: Product Image */}
      <div className="w-full">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img
            src={currentImage}
            alt={foodDetails?.name}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          {foodDetails?.additionalImages?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Additional ${index + 1}`}
              className="w-24 h-24 object-cover rounded-lg cursor-pointer border hover:border-primary"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="flex flex-col gap-6">
        {/* Product Name */}
        <h2 className="text-3xl font-extrabold text-gray-800">{foodDetails?.name}</h2>

        {/* Ratings & Reviews */}
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 text-white px-3 py-1 rounded-md text-sm">
            ★ 4.8
          </div>
          <span className="text-gray-600">(500 Reviews)</span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-primary">${foodDetails?.price}</p>

        {/* Description */}
        <p className="text-gray-600">{foodDetails?.description || "No description available."}</p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <h4 className="text-lg font-semibold">Quantity:</h4>
          <div className="flex items-center gap-2">
            <button
              onClick={decrementQuantity}
              className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleBuyNow}
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark"
          >
            Buy Now
          </button>
          <button
            onClick={handleAddToCart}
            className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary-light"
          >
            Add to Cart
          </button>
        </div>
        </div>

      
    </div>
  );
};

export default FoodDetailsTopCard;
