import DashboardLayout from '../layout/DashboardLayout';
import FoodManagement from '../pages/Dashboard/Admin/FoodManagement/FoodManagement';

import PaymentManagement from '../pages/Dashboard/Admin/PaymentManagement/PaymentManagement';
import UserManagement from '../pages/Dashboard/Admin/UserManagement/UserManagement';
import AdminDashboard from '../pages/Dashboard/AdminDashboard';

// Admin routes list with children routes
const adminRoutes = [
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            { path: '/dashboard', element: <AdminDashboard/> }, // Default admin dashboard page
            { path: '/dashboard/food-management', element: <FoodManagement /> },
            { path: '/dashboard/user-management', element: <UserManagement /> },
            { path: '/dashboard/payment-management', element: <PaymentManagement/> },
       
            // { path: 'user-management', element: <UserManagement /> },
            // Add more child routes here as needed
        ],
    },
];

export default adminRoutes;
