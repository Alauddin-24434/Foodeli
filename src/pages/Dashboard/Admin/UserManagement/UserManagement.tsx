import { useFindAllUsersQuery } from "../../../../redux/features/auth/authApi";

const UserManagement = () => {

    const {data} =useFindAllUsersQuery(undefined);


const allUsers=data?.data;

    return (
        <div className="p-6">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-semibold">User Management</h1>
                
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-500 p-4 rounded-md shadow-lg text-white">
                    <p className="text-xl">Total Users</p>
                    <p className="text-3xl font-bold">{allUsers?.length}</p>
                </div>
                <div className="bg-green-500 p-4 rounded-md shadow-lg text-white">
                    <p className="text-xl">Active Users</p>
                    <p className="text-3xl font-bold">1,045</p>
                </div>
                <div className="bg-yellow-500 p-4 rounded-md shadow-lg text-white">
                    <p className="text-xl">Admins</p>
                    <p className="text-3xl font-bold">15</p>
                </div>
                
            </div>

            <div className="overflow-auto bg-white shadow-lg rounded-md">
                <table className="w-full table-auto text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2">Avatar</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Role</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- Loop through users to populate rows --> */}

{
    allUsers?.map(user=> 
        <tr key={user?._id} className="border-b">

            <td className="px-4 py-3">
                <img src={user?.profileImage} alt="User Avatar" className="w-12 h-12 rounded-full" /></td>
            <td className="px-4 py-3">{user?.name}</td>
            <td className="px-4 py-3">{user?.email}</td>
            <td className="px-4 py-3">{user?.role}</td>
            <td className="px-4 py-3"><span className="text-green-500 font-bold">{user?.userStatus}</span></td>
            <td className="px-4 py-3">
                <button className="bg-yellow-400 text-white px-2 py-1 rounded">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
            </td>
        </tr>)
}

                        {/* <!-- Additional rows for other users --> */}
                    </tbody>
                </table>
            </div>

            {/* <!-- Pagination --> */}
            <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-700">Showing 1-10 of 125 users</span>
                <div className="flex space-x-1">
                    <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded">Previous</button>
                    <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded">Next</button>
                </div>
            </div>
        </div>

    );
};

export default UserManagement;