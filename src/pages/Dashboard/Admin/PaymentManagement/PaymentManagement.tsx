
const PaymentManagement = () => {
    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            {/* <!-- Page Title --> */}
            <h1 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Payment Management</h1>

            {/* <!-- Overview Cards --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* <!-- Total Revenue --> */}
                <div className="bg-blue-500 shadow-lg rounded-md p-4 text-white">
                    <div className="flex items-center">
                        <div className="text-3xl font-bold">$75,257</div>
                        <div className="ml-auto text-right">
                            <p>Total Revenue</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Pending Payments --> */}
                <div className="bg-yellow-500 shadow-lg rounded-md p-4 text-white">
                    <div className="flex items-center">
                        <div className="text-3xl font-bold">10</div>
                        <div className="ml-auto text-right">
                            <p>Pending Payments</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Successful Payments --> */}
                <div className="bg-green-500 shadow-lg rounded-md p-4 text-white">
                    <div className="flex items-center">
                        <div className="text-3xl font-bold">557</div>
                        <div className="ml-auto text-right">
                            <p>Successful Payments</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Refunds & Cancellations --> */}
                <div className="bg-red-500 shadow-lg rounded-md p-4 text-white">
                    <div className="flex items-center">
                        <div className="text-3xl font-bold">8</div>
                        <div className="ml-auto text-right">
                            <p>Refunds</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Filters Section --> */}
            <div className="flex flex-wrap gap-4 mb-8">
                <input type="text" placeholder="Search by User" className="p-2 w-full sm:w-1/4 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                <select className="p-2 w-full sm:w-1/4 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600">
                    <option>Status: All</option>
                    <option>Pending</option>
                    <option>Completed</option>
                    <option>Failed</option>
                    <option>Refunded</option>
                </select>
                <input type="date" className="p-2 w-full sm:w-1/4 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600" />
            </div>

            {/* <!-- Transaction History Table --> */}
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
                        {/* <!-- Example Row --> */}
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td className="py-3 px-6 text-left">#123456</td>
                            <td className="py-3 px-6 text-left">John Doe</td>
                            <td className="py-3 px-6 text-center">$150.00</td>
                            <td className="py-3 px-6 text-center">
                                <span className="bg-green-200 text-green-700 py-1 px-3 rounded-full text-xs">Completed</span>
                            </td>
                            <td className="py-3 px-6 text-center">2024-10-30</td>
                            <td className="py-3 px-6 text-center">
                                <button className="text-blue-500 hover:underline">View</button>
                            </td>
                        </tr>
                        {/* <!-- Add more rows as needed --> */}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default PaymentManagement;