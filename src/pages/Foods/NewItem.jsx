import { Link } from "react-router-dom";

const NewItem = ({newFood}) => {

const {_id,Food_name,Food_image,price} = newFood


    return (
       
<div className="relative flex flex-col text-red-700 bg-white w-96 h-96 border border-red-300 rounded-xl
 ">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={Food_image}
      className="object-cover w-full h-full "
    />
  </div>
  <div className="p-6">
    <div className="flex items-center mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
      {Food_name}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 ml-6">
      {price}
      </p>
    </div>
  </div>
  <div className="p-6 pt-0">
   <Link to={`/update/${_id}`}>
   <button
      className="block w-full select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-yellow-300 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border  " 
      type="button"
    >
     Update 
    </button>
   </Link>
  </div>
</div>

    );
};

export default NewItem;