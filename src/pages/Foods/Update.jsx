
const Update = () => {
    const handleUpdate = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const phourl = form.phourl.value;
        const category = form.category.value;
        const foodOrigin = form.foodOrigin.value;
    
      const UpdateFood = {name,email,price,quantity,phourl,foodOrigin,category}  
      console.log(UpdateFood)


    
}
    return (
        <div className=" p-24">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">Update the Food item</h2>
        <form onSubmit={handleUpdate}>
         
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <label className="input-group">
        
                        <input type="text" name="name"  className="input input-bordered w-full"  />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <label className="input-group">
        
                        <input type="text"  name="quantity"  className="input input-bordered w-full"  />
                    </label>
                </div>
            </div>
          
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">phourl</span>
                    </label>
                    <label className="input-group">
        
                        <input type="text" name="phourl"  className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
        
                        <input type="text" name="price" className="input input-bordered w-full"  />
                    </label>
                </div>
            </div>
          
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">category</span>
                    </label>
                    <label className="input-group">
                            
                        <input type="text" name="category"  className="input input-bordered w-full"  />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">foodOrigin</span>
                    </label>
                    <label className="input-group">
        
                        <input type="text" name="foodOrigin"  className="input input-bordered w-full" />
                    </label>
                </div>
            
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Mail</span>
                    </label>
                    <label className="input-group">
        
                        <input type="email" name="email"  className="input input-bordered w-full" readOnly/>
                    </label>
                </div>
            
            </div>
         
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
        
                        <input type="text" name="description"  className="input input-bordered w-full h-24" />
                    </label>
                </div>
            <input type="submit" value="Update the Food item" className="btn w-full mt-4 bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ..."/>
        </form>

        
        </div>
    );
};

export default Update;