import { useEffect } from "react";
import { useState } from "react";
import FoodCard from "../Foods/FoodCard";


const TopFoodSec = () => {
  const [allFoods,setAllFoods] = useState([])
 
  useEffect(()=>{
fetch('https://flavor-fusion-palace-server-6bj1jjsbj-mahizaman490.vercel.app/allFoods')
.then(res => res.json())
.then(data =>setAllFoods(data))
  },[])





  const limitedFoods = allFoods.slice(0, 6);

    return (
        <>
    
          <h2 className="mt-40 mb-14 text-center text-5xl font-bold  bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Top Foods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5" data-aos="zoom-in-down">

        {limitedFoods.map((food) => (
          <FoodCard key={food._id} allFood={food}></FoodCard>
        ))}

        </div>
        </>
    );
};

export default TopFoodSec;