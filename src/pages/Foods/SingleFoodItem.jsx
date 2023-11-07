import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";


const SingleFoodItem = () => {
  const details = useLoaderData()
  const {description,Food_name,Food_image,Food_category,price,Food_origin} = details
    return (
    <>
      <Helmet>
      <meta charSet="utf-8" />
      <title>FlavourFusion|SingleFoodItem</title>
      <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
        <div className="card  bg-base-100 ">
        <figure><img className="h-[500px] w-full" src={Food_image} alt="Album"/></figure>
        <div className="card-body">
        <div className="">

<p className="mb-2 ">{description}</p>
</div>
          <h2 className="card-title text-red-600">Name:<span className="text-orange-500">{Food_name} </span></h2>
          <h2 className="card-title text-red-600">category:<span className="text-orange-500">{Food_category}</span></h2>
          <h2 className="card-title text-red-600">price:<span className="text-orange-500">${price}</span></h2>
          <h2 className="card-title text-red-600">Made BY: <span className="text-orange-500"> Achol</span></h2>
          <h2 className="card-title text-red-600">Food Origin:<span className="text-orange-500">{Food_origin}</span></h2>
       
     
          <div className="card-actions justify-end">
           <Link to='/foodpurchase'>
           <button className="btn btn-outline btn-error w-40">Order Item</button>
           </Link>
          </div>
        </div>
      </div>
    </>
    );
};

export default SingleFoodItem;