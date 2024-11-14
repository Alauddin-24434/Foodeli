import { useEffect, useState } from 'react';
import axios from 'axios';

const FoodItem = () => {
    const [foodItems, setFoodItems] = useState([]);  // Change to an array
    const [loading, setLoading] = useState(true);      // Add loading state
    const [error, setError] = useState(null);          // Add error state

    useEffect(() => {
        // Fetch all food items from your backend API
        const fetchFoodItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/food');
                console.log(response)
                setFoodItems(response.data.data);  // Set the food items
                setLoading(false);                 // Set loading to false
            } catch (err) {
                console.error("Error fetching food items:", err);
                setError(err);                     // Set error if any
                setLoading(false);                 // Also set loading to false on error
            }
        };

        fetchFoodItems();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching food items: {error.message}</p>;

    return (
        <div>
            <h2>Food Items</h2>
            {foodItems.length === 0 ? (
                <p>No food items available.</p>
            ) : (
                foodItems.map((foodItem) => (
                    <div key={foodItem._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                        <h3>{foodItem.name}</h3>
                        <p>Category: {foodItem.category}</p>
                        <p>Price: ${foodItem.price.toFixed(2)}</p>
                        <p>Stock: {foodItem.stock}</p>
                        <img src={foodItem.thumbnailImage} alt={foodItem.name} style={{ width: '200px', height: 'auto' }} />

                        <div>
                            <h4>Additional Images:</h4>
                            {foodItem.additionalImages.map((image, index) => (
                                <img key={index} src={image} alt={`Additional ${index + 1}`} style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default FoodItem;
