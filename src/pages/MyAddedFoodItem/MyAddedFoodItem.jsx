import { Helmet } from "react-helmet";
import {  useLoaderData } from "react-router-dom";
import NewItem from "../Foods/NewItem";

const MyAddedFoodItem = () => {
  const newFoods = useLoaderData()
  console.log(newFoods);
    return (
        <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>FlavourFusion|MyAddedFood</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
   <h2 className="my-14 text-center text-5xl font-bold  bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">My Added Food Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-5 ml-7s mb-24">

{

  newFoods.map(newFood => <NewItem key={newFood._id} newFood={newFood}></NewItem>)
}

        </div>
        </div>
    );
};

export default MyAddedFoodItem;