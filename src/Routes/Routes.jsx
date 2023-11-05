import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Error from "../errPage/Error";
import AllFoodItems from "../pages/Foods/AllFoodItems";

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
        }
      ]
    },
  ]);




  export default router;