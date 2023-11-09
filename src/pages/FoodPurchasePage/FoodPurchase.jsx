import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const FoodPurchase = () => {
    const foodInfo = useLoaderData()
    const {_id,Food_name,price,Food_image} = foodInfo
    const { user} = useContext(AuthContext);
    const handlePurchase = event => {

        event.preventDefault();
        const form = event.target;
        const Food_name = form.Food_name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const BuyerName = form.BuyerName.value;
        const BuyerMail = form.BuyerMail.value;
        const date = form.date.value;
    
      const purchaseFood = {Food_name,price,quantity,BuyerName,date,BuyerMail, item:_id,Food_image }  
      console.log(purchaseFood)

      
fetch('https://flavor-fusion-palace-server.vercel.app/myorders',{
    method: 'POST',
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify(purchaseFood)
})
.then(res=>res.json())
.then(data =>{
    console.log(data);
    if(data.insertedId){
        Swal.fire("order confirmed successfully!")
    }
})







    
}
    
    return (

<>
<Helmet>
                <meta charSet="utf-8" />
                <title>FlavourFusion|Purchase</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<div className="p-24">
<h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">purchase the Food item</h2>
<form onSubmit={handlePurchase}>
 
    <div className="md:flex">
        <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">

                <input type="text" name="Food_name" placeholder="Food Name" className="input input-bordered w-full"  defaultValue={Food_name}/>
            </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">

                <input type="text"  name="quantity" placeholder="Quantity" className="input input-bordered w-full" defaultValue={1} />
            </label>
        </div>
    </div>
  
    <div className="md:flex">
        <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">BuyerName</span>
            </label>
            <label className="input-group">

                <input type="text" name="BuyerName"  className="input input-bordered w-full" defaultValue={user.displayName} readOnly/>
            </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Price</span>
            </label>
            <label className="input-group">

                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" defaultValue={price} />
            </label>
        </div>
    </div>
  
    <div className="md:flex">
        <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">BuyerMail</span>
            </label>
            <label className="input-group">
                    
                <input type="email" name="BuyerMail"  className="input input-bordered w-full" defaultValue={user.email} readOnly />
            </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text">date</span>
            </label>
            <label className="input-group">

                <input type="date" name="date" placeholder="date" className="input input-bordered w-full" />
            </label>
        </div>
    </div>
 

    <input type="submit" value="purchase the Food item" className="btn w-full mt-4 bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ... "/>
</form>
</div>
</>
    );
};

export default FoodPurchase;