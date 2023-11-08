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
import Update from "../pages/Foods/Update";
import PrivateRoutes from "../private/PrivateRoutes";

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
            path:'/singlefooditem/:id',
            element:<SingleFoodItem></SingleFoodItem>,
            loader:({params})=>fetch(`http://localhost:5000/allFoods/${params.id}`) 
        },
        //this is a private page

        {
            path:'foodpurchase/:id',
            element:<PrivateRoutes><FoodPurchase></FoodPurchase></PrivateRoutes>,
            loader:({params})=>fetch(`http://localhost:5000/allFoods/${params.id}`) 
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
            element:<PrivateRoutes><MyAddedFoodItem></MyAddedFoodItem></PrivateRoutes>,
            loader: () => fetch('http://localhost:5000/addafooditem')
        },
        {
            path:'/addafooditem',
            element:<PrivateRoutes><AddAFoodItem></AddAFoodItem></PrivateRoutes>,
        },
        {
            path:'/myorderpage',
            element:<PrivateRoutes><MyOrders></MyOrders></PrivateRoutes>,
        },
        {
            path:'/update/:id',
            element:<PrivateRoutes><Update></Update></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/addafooditem/${params.id}`)
        },
        {
            path:'/blog',
            element:<Blog></Blog>,
        }
      ]
    },
  ]);




  export default router;