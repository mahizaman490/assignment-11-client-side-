import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddAFoodItem = () => {
    const { user} = useContext(AuthContext);
    const handleAdd = event => {

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
    
      const newFood = {Food_name,email,price,quantity,Food_image,Food_origin,Food_category,description}  
      console.log(newFood)
  
fetch('https://flavor-fusion-palace-server-6bj1jjsbj-mahizaman490.vercel.app/addafooditem',{
  method:'POST',
  headers:{
'content-type': 'application/json'
  },
body: JSON.stringify(newFood)


})
.then(res=>res.json())
.then(data =>{
    console.log(data);
    if(data.insertedId){
        Swal.fire("A New item added successfully!")
    }
})



    
}
    return (
 <>
 
 <Helmet>
                <meta charSet="utf-8" />
                <title>FlavourFusion|AddAFood</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className=" p-24">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">Add A Food item</h2>
        <form onSubmit={handleAdd}>
         
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <label className="input-group">
        
                        <input type="text" name="Food_name" placeholder="Food Name" className="input input-bordered w-full"  />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <label className="input-group">
        
                        <input type="text"  name="quantity" placeholder="Quantity" className="input input-bordered w-full"  />
                    </label>
                </div>
            </div>
          
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food_image</span>
                    </label>
                    <label className="input-group">
        
                        <input type="text" name="Food_image"  className="input input-bordered w-full" placeholder="PhotoURL" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
        
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full"  />
                    </label>
                </div>
            </div>
          
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food_category</span>
                    </label>
                    <label className="input-group">
                            
                        <input type="text" name="Food_category"  className="input input-bordered w-full"  placeholder="Food_category"/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">foodOrigin</span>
                    </label>
                    <label className="input-group">
        
                        <input type="text" name="Food_origin" placeholder="foodOrigin" className="input input-bordered w-full" />
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
        
                        <input type="text" name="description" placeholder="description" className="input input-bordered w-full h-24" />
                    </label>
                </div>
            <input type="submit" value="Add the Food item" className="btn w-full mt-4 bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ..."/>
        </form>

        
        </div>
 
 </>
    );
};

export default AddAFoodItem;