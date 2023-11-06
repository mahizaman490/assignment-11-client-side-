import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const MyAddedFoodItem = () => {
    return (
        <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>FlavourFusion|MyAddedFood</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
   <h2 className="my-14 text-center text-5xl font-bold  bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">My Added Food Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-5 ml-7s mb-24">


<div className="relative flex flex-col text-red-700 bg-white w-96 h-96 border border-red-300 rounded-xl
 ">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src="https://i.ibb.co/mHQ06rg/top-view-table-full-food.jpg"
      className="object-cover w-full h-full "
    />
  </div>
  <div className="p-6">
    <div className="flex items-center mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
    Food name
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 ml-6">
        $95.00
      </p>
    </div>
  </div>
  <div className="p-6 pt-0">
   <Link to='/update'>
   <button
      className="block w-full select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-yellow-300 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border  " 
      type="button"
    >
     Update 
    </button>
   </Link>
  </div>
</div>


        </div>
        </div>
    );
};

export default MyAddedFoodItem;