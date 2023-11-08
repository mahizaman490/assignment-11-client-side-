/* eslint-disable react/prop-types */
const OrderCard = ({order,handleDelete}) => {
    const{_id,Food_name,Food_image,price,date} = order



   
    return (
 
        <div className="card lg:card-side  w-10/12 bg-yellow-100 px-24">
        <figure><img className="w-40 h-40 rounded-full" src={Food_image} alt="Album"/></figure>
        <div className="card-body ">
          
          <div className="flex ">
         
          <p className="mt-8 font-semibold ">{Food_name}</p>
          <p className="mt-8 font-semibold ">Owner:Achol</p>
          <p className="mt-8 font-semibold ">${price}</p>
          <p className="mt-8 font-semibold ">{date}</p>
          <button onClick={()=>handleDelete(_id)} className="btn mt-6 bg-white"><img className="w-10 rounded-full" src="https://i.ibb.co/ZMSVH3f/trash-bin-front-side-with-white-background.jpg" alt="" /></button>
          </div>
        
        </div>
      </div>
    );
};

export default OrderCard;