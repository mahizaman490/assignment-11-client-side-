/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const FoodCard = ({allFood}) => {
    const {_id,Food_name,Food_image,Food_category,price,quantity} = allFood
    return (
        <div>
                    <div  className="card lg:card-side bg-base-100  border-orange-600 border md:w-96 lg:w-[400px] lg:max-h-[270px] md:h-96" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
  <figure><img className="w-full   h-full" src={Food_image} alt="Album"/></figure>
 <div className="card-body p-4">
    <h2 className="card-title">{Food_name}</h2>
    <p className="font-semibold text-slate-700">category: {Food_category}</p>
    <p className="font-semibold text-slate-700">${price}</p>
    <p className="font-semibold text-slate-700">quantity:{quantity}</p>
    <div className="card-actions justify-end">
 <Link to={`/singlefooditem/${_id}`}>  <button className="btn  bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ... ">Details</button></Link>
    </div>
  </div>
</div>

        </div>
    );
};

export default FoodCard;