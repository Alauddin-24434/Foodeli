
// import { useFindAllFoodItemsQuery } from '../../../redux/features/foodItems/foodItemsApi';

// const FoodItem = () => {


 
//     const { data: foodItems , error,isLoading} = useFindAllFoodItemsQuery(undefined)


//     if (isLoading) return <p>Loading...</p>;
//     if (error) return <p>Error fetching food items: {error?.data?.data.message}</p>;

//     return (
//         <div>
//             <h2>Food Items</h2>
//             {foodItems.length === 0 ? (
//                 <p>No food items available.</p>
//             ) : (
//                 foodItems.map((foodItem) => (
//                     <div key={foodItem._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
//                         <h3>{foodItem.name}</h3>
//                         <p>Category: {foodItem.category}</p>
//                         <p>Price: ${foodItem.price.toFixed(2)}</p>
//                         <p>Stock: {foodItem.stock}</p>
//                         <img src={foodItem.thumbnailImage} alt={foodItem.name} style={{ width: '200px', height: 'auto' }} />

//                         <div>
//                             <h4>Additional Images:</h4>
//                             {foodItem.additionalImages.map((image, index) => (
//                                 <img key={index} src={image} alt={`Additional ${index + 1}`} style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
//                             ))}
//                         </div>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };

// export default FoodItem;
