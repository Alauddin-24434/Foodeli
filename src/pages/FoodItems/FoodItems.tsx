import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Container from "../../components/shared/container/Container";
import { useFindAllFoodItemsQuery } from "../../redux/features/foodItems/foodItemsApi";
import Loader from "../../Loader/Loader";

const FoodItems = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(""); // Renamed this variable
    const [debouncedSearch, setDebouncedSearch] = useState(search);
    const [sorting, setSorting] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const [searchParams] = useSearchParams();
    const queryCategory = searchParams.get('category'); // Renamed this variable
    console.log(queryCategory)

    useEffect(() => {
        // Set the category from the query parameter if available
        if (queryCategory) {
            setSelectedCategory(queryCategory);
        }
    }, [queryCategory]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300);
        return () => clearTimeout(handler);
    }, [search]);

    const { data, isError, isLoading } = useFindAllFoodItemsQuery({ 
        page: currentPage, 
        limit: itemsPerPage, 
        q: debouncedSearch,
        category: selectedCategory, // Use the renamed variable
        sorting
    });

    const foodItems = data?.data?.items || [];
    console.log(foodItems)
    const totalItems = data?.data?.total || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleNavigate = (id) => navigate(`/food-details/${id}`);
    const handleClearFilters = () => {
        setSearch("");
        setSelectedCategory(""); // Use the renamed variable
        setSorting("");
        setCurrentPage(1);
    };

    if (isLoading) {
        return (
            <Container>
                <div className="flex justify-center items-center h-screen">
                    <Loader />
                </div>
            </Container>
        );
    }

    if (isError) {
        return (
            <Container>
                <div className="flex justify-center items-center h-screen">
                    <h2 className="text-xl font-semibold text-red-600">Error loading food items. Please try again later.</h2>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div className="min-h-screen">
                <div className="mb-4 p-4 border rounded-lg bg-gray-100 mt-16">
                    <h3 className="font-bold text-lg mb-2">Filters</h3>
                    <div className="flex flex-wrap">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border rounded px-2 py-1 mb-2 mr-2 w-full sm:w-auto"
                        />
                        <button onClick={handleClearFilters} className="bg-red-500 text-white px-3 py-1 rounded mb-2 mr-2">Refresh</button>
                        <select
                            value={selectedCategory} // Use the renamed variable
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="border rounded px-2 py-1 mb-2 mr-2 w-full sm:w-auto"
                        >
                            <option value="">All Categories</option>
                            <option value="category1">Category 1</option>
                            <option value="category2">Category 2</option>
                            <option value="category3">Category 3</option>
                        </select>
                        <select
                            value={sorting}
                            onChange={(e) => setSorting(e.target.value)}
                            className="border rounded px-2 py-1 mb-2 w-full sm:w-auto"
                        >
                            <option value="">Sort by Price</option>
                            <option value="lowToHigh">Low to High</option>
                            <option value="highToLow">High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Food Items List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {foodItems.map(item => (
                        <div key={item._id} className="relative overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
                            <img 
                                onClick={() => handleNavigate(item._id)} 
                                className="h-36 w-full rounded-t-lg object-cover cursor-pointer" 
                                src={item.thumbnailImage} 
                                alt={item.name} 
                            />
                            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-[#F2C94C] text-black text-center text-sm">Available</span>
                            <div className="mt-4 px-5 pb-5">
                                <h5 className="cursor-pointer text-xl font-semibold tracking-tight text-slate-900">
                                    {item.name}
                                </h5>
                                <div className="mt-2.5 mb-5 flex items-center">
                                    <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>
                                        <span className="text-3xl font-bold text-slate-900">${item.price}</span>
                                    </p>
                                    <p>Add To Cart</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="self-center">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default FoodItems;
