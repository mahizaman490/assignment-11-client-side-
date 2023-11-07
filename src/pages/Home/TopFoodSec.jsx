import { useEffect } from "react";
import { useState } from "react";
import FoodCard from "../Foods/FoodCard";


const TopFoodSec = () => {
  const [allFoods,setAllFoods] = useState([])
 
  useEffect(()=>{
fetch('http://localhost:5000/allFoods')
.then(res => res.json())
.then(data =>setAllFoods(data))
  },[])







    return (
        <>
    
          <h2 className="mt-40 mb-14 text-center text-5xl font-bold  bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Top Foods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5" data-aos="zoom-in-down">

         {
          allFoods.map(allFood => <FoodCard key={allFood._id} allFood={allFood}></FoodCard>)

         }

        </div>
        </>
    );
};

export default TopFoodSec;