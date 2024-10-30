

const Notifications = () => {
    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
        {/* <!-- Page Title --> */}
        <h1 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Notification Management</h1>
      
        {/* <!-- Notification Filters --> */}
        <div className="flex flex-wrap gap-4 mb-8">
          <input type="text" placeholder="Search notifications..." className="p-2 w-full sm:w-1/3 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"/>
          <select className="p-2 w-full sm:w-1/4 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600" >
            <option>Type: All</option>
            <option>Info</option>
            <option>Warning</option>
            <option>Error</option>
            <option>Success</option>
          </select>
          <select className="p-2 w-full sm:w-1/4 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600">
            <option>Status: All</option>
            <option>Unread</option>
            <option>Read</option>
          </select>
        </div>
      
        {/* <!-- Notifications List --> */}
        <div className="overflow-auto bg-white dark:bg-gray-800 shadow rounded-lg">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm leading-normal">
                <th className="py-3 px-6 text-left">Notification</th>
                <th className="py-3 px-6 text-center">Type</th>
                <th className="py-3 px-6 text-center">Status</th>
                <th className="py-3 px-6 text-center">Date</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-300 text-sm font-light">
              {/* <!-- Example Notification Row --> */}
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-3 px-6 text-left">System update scheduled for tomorrow.</td>
                <td className="py-3 px-6 text-center">
                  <span className="bg-blue-200 text-blue-700 py-1 px-3 rounded-full text-xs">Info</span>
                </td>
                <td className="py-3 px-6 text-center">
                  <span className="bg-yellow-200 text-yellow-700 py-1 px-3 rounded-full text-xs">Unread</span>
                </td>
                <td className="py-3 px-6 text-center">2024-10-30</td>
                <td className="py-3 px-6 text-center">
                  <button className="text-blue-500 hover:underline">Mark as Read</button> | 
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
              {/* <!-- Additional notification rows can be added similarly --> */}
            </tbody>
          </table>
        </div>
      </div>
      
    );
};

export default Notifications;