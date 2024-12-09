import { useState, useEffect } from 'react';
import FoodModal from '../../../../components/Dashboard/AdminRelated/Foodmodal';
import { useFindAllFoodItemsQuery } from '../../../../redux/features/foodItems/foodItemsApi';

const FoodManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

    // Debounce logic: update `debouncedSearchQuery` after a delay
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 300); // 300ms debounce time
        return () => clearTimeout(handler);
    }, [searchQuery]);

    const { data, isError, isLoading } = useFindAllFoodItemsQuery({
        page: currentPage,
        limit: itemsPerPage,
        q: debouncedSearchQuery, // Use debounced query here
    });

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching food items.</p>;

    const totalItems = data?.data?.totalItems || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

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

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search food items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 border rounded-md w-full md:w-1/3"
                />
            </div>

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
                        {data?.data?.items?.map((item) => (
                            <tr key={item._id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2">
                                    <img
                                        src={item?.thumbnailImage}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </td>
                                <td className="px-4 py-2">{item.name}</td>
                                <td className="px-4 py-2">{item.category}</td>
                                <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                                <td className="px-4 py-2">
                                    <span
                                        className={`px-2 py-1 rounded-md ${
                                            item?.isAvailable
                                                ? 'bg-green-200 text-green-700'
                                                : 'bg-red-200 text-red-700'
                                        }`}
                                    >
                                        {item?.isAvailable ? 'Available' : 'Not Available'}
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

            <div className="flex justify-between items-center mt-4">
                <p>
                    Showing {Math.min(totalItems, (currentPage - 1) * itemsPerPage + 1)}-
                    {Math.min(totalItems, currentPage * itemsPerPage)} of {totalItems} items
                </p>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-md ${
                            currentPage === 1
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-md ${
                            currentPage === totalPages
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                    >
                        Next
                    </button>
                </div>
            </div>

            <FoodModal isOpen={isOpen} onCancel={handleCloseModal} />
        </div>
    );
};

export default FoodManagement;
