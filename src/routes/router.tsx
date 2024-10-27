import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import FoodDetails from "../pages/FoodDetails/FoodDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:([
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/food-details',
            element:<FoodDetails/>
        },
      ])
    },
  ]);

  export default router;