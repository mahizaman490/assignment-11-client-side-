import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Error from "../errPage/Error";
import AllFoodItems from "../pages/Foods/AllFoodItems";
import SingleFoodItem from "../pages/Foods/SingleFoodItem";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/allfooditems',
            element:<AllFoodItems></AllFoodItems>,
        },
        {
            path:'/singlefooditem',
            element:<SingleFoodItem></SingleFoodItem>,
        }
      ]
    },
  ]);




  export default router;