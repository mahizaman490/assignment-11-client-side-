import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Error from "../errPage/Error";
import AllFoodItems from "../pages/Foods/AllFoodItems";
import SingleFoodItem from "../pages/Foods/SingleFoodItem";
import FoodPurchase from "../pages/FoodPurchasePage/FoodPurchase";
import Blog from "../pages/Blogpage/Blog";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
import MyAddedFoodItem from "../pages/MyAddedFoodItem/MyAddedFoodItem";
import AddAFoodItem from "../pages/AddAFoodItem/AddAFoodItem";
import MyOrders from "../pages/MyOrders/MyOrders";

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
        },
        //this is a private page

        {
            path:'/foodpurchase',
            element:<FoodPurchase></FoodPurchase>,
        },
        {
            path:'/login',
            element:<LogIn></LogIn>,
        },
        {
            path:'/register',
            element:<Register></Register>,
        },
        {
            path:'/myaddedfooditems',
            element:<MyAddedFoodItem></MyAddedFoodItem>,
        },
        {
            path:'/addafooditem',
            element:<AddAFoodItem></AddAFoodItem>,
        },
        {
            path:'/myorderpage',
            element:<MyOrders></MyOrders>,
        },
        {
            path:'/blog',
            element:<Blog></Blog>,
        }
      ]
    },
  ]);




  export default router;