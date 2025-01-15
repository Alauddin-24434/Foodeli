import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import FoodReviews from "../pages/FoodReviews/FoodReviews";

import Register from "../pages/Authenticate/Register";
import Login from "../pages/Authenticate/Login";
import ErrorPage from "../pages/ErrorPage";
import adminRoutes from "./AdminRoutes";
import ProtectedRoute from "./ProtectedRoute";
import FoodShpSummery from "../pages/FoodShpSummery/FoodShpSummery";
import FoodItems from "../pages/FoodItems/FoodItems";
import PaymentCancel from "../pages/payment/PaymentCancel/PaymentCancel";
import PaymentFailed from "../pages/payment/PaymentFail/PaymentFail";
import AboutUs from "../pages/AboutUs/AboutUs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/food-details/:id', element: <FoodDetails /> },
            { path: '/food-reviews', element: <FoodReviews /> },
            { path: '/cart', element: <FoodShpSummery /> },
            { path: '/food-items', element: <FoodItems /> },
            { path: '/about-us', element: <AboutUs /> },

         

       
           
        ],
    },
    { path: '/cancel-payment', element: <PaymentCancel /> },
    { path: '/fail-payment', element: <PaymentFailed/> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    // Admin Routes
    ...adminRoutes.map((route) => ({
        path: route.path,
        element: (
            <ProtectedRoute allowedRoles={['user']}>
                {route.element}
            </ProtectedRoute>
        ),
        children: route.children, // Pass in the children routes here
    })),
]);

export default router;
