import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import FoodCard from "./FoodCard";

const AllFoodItems = () => {
  const [allFoodItems, setAllFoodItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://flavor-fusion-palace-server.vercel.app/allFoods")
      .then((res) => res.json())
      .then((data) => setAllFoodItems(data));
  }, []);

  // Function to filter food items based on the search query
  const filteredFoodItems = allFoodItems.filter((food) =>
    food.Food_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle input change and update the search query state
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FlavourFusion | AllFoodItems</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex w-8/12 ml-[460px] mt-10">
        <input
          type="text"
          placeholder="Type here A Food Name"
          className="input input-bordered input-error w-full max-w-xs"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="btn btn-error">Click Here</button>
      </div>
      <h2 className="my-10 text-center text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200 text-transparent bg-clip-text">
        All Food Items Here
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-24 px-5">
        {filteredFoodItems.map((allFood) => (
          <FoodCard key={allFood._id} allFood={allFood} />
        ))}
      </div>
    </div>
  );
};

export default AllFoodItems;
