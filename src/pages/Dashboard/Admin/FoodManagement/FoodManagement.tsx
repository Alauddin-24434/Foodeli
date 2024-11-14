import { useEffect, useState } from 'react';
import FoodModal from '../../../../components/Dashboard/AdminRelated/Foodmodal';
import Notification from '../../../../components/Dashboard/AdminRelated/Notification';
import axios from 'axios';


const FoodManagement = () => {
    const [foodItems, setFoodItems] = useState([]);  // Change to an array
    const [loading, setLoading] = useState(true);      // Add loading state
    const [error, setError] = useState(null);          // Add error state
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };


 

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
        <div className="p-6">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-semibold">Food Management</h1>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={handleOpenModal}
                >
                    + Add New Food Item
                </button>
            </header>
            
            <Notification />

            <div className="overflow-auto bg-white shadow-lg rounded-md">
                <table className="w-full table-auto text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Price</th>
                         
                            <th className="px-4 py-2">Status</th> 
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodItems.map((item) => (
                            <tr key={item._id} className="border-b">
                                <td className="px-4 py-2">
                                    <img src={item?.thumbnailImage} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                </td>
                                <td className="px-4 py-2">{item.name}</td>
                                <td className="px-4 py-2">{item.category}</td>
                                <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                                {/* <td className="px-4 py-2">{item.stock}</td> */}
                                <td className="px-4 py-2">
                                    <span className={`px-2 py-1 rounded-md ${item?.isAvailable === true ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
                                        {item?.isAvailable === true ? "Available":"NotAvailabe"}
                                    </span>
                                </td>
                                <td className="px-4 py-2">
                                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                                    <button className="text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <FoodModal 
                isOpen={isOpen}
                onCancel={handleCloseModal} 
            />
        </div>
    );
};

export default FoodManagement;
