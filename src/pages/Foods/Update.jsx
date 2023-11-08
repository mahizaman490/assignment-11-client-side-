import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const updatedfood = useLoaderData()
    // eslint-disable-next-line no-unused-vars
    const {_id,Food_name,price,quantity,Food_image,Food_origin,Food_category,description}  = updatedfood
    const { user} = useContext(AuthContext);


    const handleUpdate = event => {

        event.preventDefault();
        const form = event.target;
        const Food_name = form.Food_name.value;
        const email = form.email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const Food_image = form.Food_image.value;
        const Food_category = form.Food_category.value;
        const Food_origin= form.Food_origin.value;
        const description = form.description.value;
    
      const updateFood = {Food_name,email,price,quantity,Food_image,Food_origin,Food_category,description}  
      console.log(updateFood)
  
fetch(`https://flavor-fusion-palace-server-6bj1jjsbj-mahizaman490.vercel.app/addafooditem/${_id}`,{
  method:'PUT',
  headers:{
'content-type': 'application/json'
  },
body: JSON.stringify(updateFood)


})
.then(res=>res.json())
.then(data =>{
    console.log(data);
    if(data.modifiedCount>0){
        Swal.fire(" food item updated successfully!")
    }
})



    
}
    return (
    <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>FlavourFusion|Update</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
        <div className=" p-24">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">Update the Food item</h2>
        <form onSubmit={handleUpdate}>
         
         <div className="md:flex">
             <div className="form-control md:w-1/2">
                 <label className="label">
                     <span className="label-text">Food Name</span>
                 </label>
                 <label className="input-group">
     
                     <input type="text" name="Food_name" placeholder="Food Name" defaultValue={Food_name} className="input input-bordered w-full"  />
                 </label>
             </div>
             <div className="form-control md:w-1/2 ml-4">
                 <label className="label">
                     <span className="label-text">Quantity</span>
                 </label>
                 <label className="input-group">
     
                     <input type="text"  name="quantity" placeholder="Quantity" className="input input-bordered w-full" defaultValue={quantity} />
                 </label>
             </div>
         </div>
       
         <div className="md:flex">
             <div className="form-control md:w-1/2">
                 <label className="label">
                     <span className="label-text">Food_image</span>
                 </label>
                 <label className="input-group">
     
                     <input type="text" name="Food_image"  className="input input-bordered w-full" placeholder="PhotoURL" defaultValue={Food_image}/>
                 </label>
             </div>
             <div className="form-control md:w-1/2 ml-4">
                 <label className="label">
                     <span className="label-text">Price</span>
                 </label>
                 <label className="input-group">
     
                     <input type="text" name="price" placeholder="Price" className="input input-bordered w-full"  defaultValue={price}/>
                 </label>
             </div>
         </div>
       
         <div className="md:flex">
             <div className="form-control md:w-1/2">
                 <label className="label">
                     <span className="label-text">Food_category</span>
                 </label>
                 <label className="input-group">
                         
                     <input type="text" name="Food_category"  className="input input-bordered w-full"  placeholder="Food_category"  defaultValue={Food_category}/>
                 </label>
             </div>
             <div className="form-control md:w-1/2 ml-4">
                 <label className="label">
                     <span className="label-text">foodOrigin</span>
                 </label>
                 <label className="input-group">
     
                     <input type="text" name="Food_origin" placeholder="foodOrigin" className="input input-bordered w-full"  defaultValue={Food_origin}/>
                 </label>
             </div>
         
             <div className="form-control md:w-1/2 ml-4">
                 <label className="label">
                     <span className="label-text">Mail</span>
                 </label>
                 <label className="input-group">
     
                     <input type="email" name="email"  className="input input-bordered w-full" defaultValue={user.email} readOnly/>
                 </label>
             </div>
         
         </div>
      
         <div className="form-control">
                 <label className="label">
                     <span className="label-text">Description</span>
                 </label>
                 <label className="input-group">
     
                     <input type="text" name="description" placeholder="description" className="input input-bordered w-full h-24"  defaultValue={description} />
                 </label>
             </div>
         <input type="submit" value="Add the Food item" className="btn w-full mt-4 bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ..."/>
     </form>

        
        </div>
    </>
    );
};

export default Update;