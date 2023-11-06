
const Update = () => {
    const handleUpdate = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const phourl = form.phourl.value;
        const category = form.category.value;
        const foodOrigin = form.foodOrigin.value;
    
      const UpdateFood = {name,price,quantity,phourl,foodOrigin,category}  
      console.log(UpdateFood)


    
}
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-bold">Update the Food item</h2>
        <form onSubmit={handleUpdate}>
         
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <label className="input-group">
        
                        <input type="text" name="name" placeholder="Food Name" className="input input-bordered w-full"  />
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
        
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full"  />
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
        
                        <input type="text" name="foodOrigin" placeholder="foodOrigin" className="input input-bordered w-full" />
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
            <input type="submit" value="Update the Food item" className="btn w-full mt-4 bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ..."/>
        </form>

        
        </div>
    );
};

export default Update;