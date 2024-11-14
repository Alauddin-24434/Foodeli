import { useState, useEffect } from "react";
import Loader from "../../../../Loader/Loader";
import { useFindAllPaymentsQuery } from "../../../../redux/features/payment/payment.api";

const PaymentManagement = () => {
    const [searchUser, setSearchUser] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [debouncedSearch, setDebouncedSearch] = useState(searchUser);

    // Debounce search input to avoid excessive API calls
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchUser);
        }, 300);
        return () => clearTimeout(handler);
    }, [searchUser]);

    const { data, isLoading, isError } = useFindAllPaymentsQuery({
        page: currentPage,
        limit: itemsPerPage,
        user: debouncedSearch,
        status: statusFilter,
    });

    const payments = data
    console.log("p",payments)
  
    const totalPayments = data?.data?.total || 0;
    const totalPages = Math.ceil(totalPayments / itemsPerPage);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h2 className="text-xl font-semibold text-red-600">Error loading payments. Please try again later.</h2>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Payment Management</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-500 shadow-lg rounded-md p-4 text-white">
                    <div className="flex items-center">
                        <div className="text-3xl font-bold">$75,257</div>
                        <div className="ml-auto text-right">
                            <p>Total Revenue</p>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow-500 shadow-lg rounded-md p-4 text-white">
                    <div className="flex items-center">
                        <div className="text-3xl font-bold">10</div>
                        <div className="ml-auto text-right">
                            <p>Pending Payments</p>
                        </div>
                    </div>
                </div>
                <div className="bg-green-500 shadow-lg rounded-md p-4 text-white">
                    <div className="flex items-center">
                        <div className="text-3xl font-bold">557</div>
                        <div className="ml-auto text-right">
                            <p>Successful Payments</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Search by User"
                    value={searchUser}
                    onChange={(e) => setSearchUser(e.target.value)}
                    className="p-2 w-full sm:w-1/4 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
                />
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="p-2 w-full sm:w-1/4 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
                >
                    <option value="">Status: All</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Failed">Failed</option>
                </select>
            </div>

            <div className="overflow-auto bg-white dark:bg-gray-800 shadow rounded-lg">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Payment ID</th>
                            <th className="py-3 px-6 text-left">User</th>
                            <th className="py-3 px-6 text-center">Amount</th>
                            <th className="py-3 px-6 text-center">Status</th>
                            <th className="py-3 px-6 text-center">Date</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-300 text-sm font-light">
                        {payments?.map((payment) => (
                            <tr key={payment._id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td className="py-3 px-6 text-left">{payment._id}</td>
                                <td className="py-3 px-6 text-left">{payment.user.name}</td>
                                <td className="py-3 px-6 text-center">${payment.amount}</td>
                                <td className="py-3 px-6 text-center">
                                    <span className={`py-1 px-3 rounded-full text-xs ${
                                        payment.status === 'Completed' ? 'bg-green-200 text-green-700' :
                                        payment.status === 'Pending' ? 'bg-yellow-200 text-yellow-700' :
                                        'bg-red-200 text-red-700'
                                    }`}>
                                        {payment.status}
                                    </span>
                                </td>
                                <td className="py-3 px-6 text-center">{payment.date}</td>
                                <td className="py-3 px-6 text-center">
                                    <button className="text-blue-500 hover:underline">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="self-center">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaymentManagement;
