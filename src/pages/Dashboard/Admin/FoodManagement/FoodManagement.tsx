
const FoodManagement = () => {
    return (
        <div className="p-6">
        <header className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-semibold">Food Management</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">+ Add New Food Item</button>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-500 p-4 rounded-md shadow-lg text-white">
                <p className="text-xl">Total Food Items</p>
                <p className="text-3xl font-bold">250</p>
            </div>
            <div className="bg-yellow-500 p-4 rounded-md shadow-lg text-white">
                <p className="text-xl">Low Stock Items</p>
                <p className="text-3xl font-bold">15</p>
            </div>
            <div className="bg-green-500 p-4 rounded-md shadow-lg text-white">
                <p className="text-xl">Orders Today</p>
                <p className="text-3xl font-bold">45</p>
            </div>
            <div className="bg-red-500 p-4 rounded-md shadow-lg text-white">
                <p className="text-xl">Revenue</p>
                <p className="text-3xl font-bold">$1,250</p>
            </div>
        </div>

        <div className="overflow-auto bg-white shadow-lg rounded-md">
            <table className="w-full table-auto text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Stock</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- Loop through food items to populate rows --> */}
                    <tr className="border-b">
                        <td className="px-4 py-3">
                            <img src="food-image.jpg" alt="Food Item" className="w-16 h-16 rounded-full"/></td>
                        <td className="px-4 py-3">Pasta Primavera</td>
                        <td className="px-4 py-3">Main Course</td>
                        <td className="px-4 py-3">$12.99</td>
                        <td className="px-4 py-3">20</td>
                        <td className="px-4 py-3"><span className="text-green-500 font-bold">Available</span></td>
                        <td className="px-4 py-3">
                            <button className="bg-yellow-400 text-white px-2 py-1 rounded">Edit</button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
                        </td>
                    </tr>
                    {/* <!-- More rows --> */}
                </tbody>
            </table>
        </div>
    </div>

    );
};

export default FoodManagement;