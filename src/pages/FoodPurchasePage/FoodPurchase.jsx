const FoodPurchase = () => {
    const handlePurchase = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const BuyerName = form.BuyerName.value;
        const BuyerMail = form.BuyerMail.value;
        const buyingDate = form.buyingDate.value;
    
      const purchaseFood = {name,price,quantity,BuyerName,buyingDate,BuyerMail}  
      console.log(purchaseFood)


    
}
    
    return (

<div className="bg-[#F4F3F0] p-24">
<h2 className="text-3xl font-bold">purchase the Food item</h2>
<form onSubmit={handlePurchase}>
 
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
                <span className="label-text">BuyerName</span>
            </label>
            <label className="input-group">

                <input type="text" name="BuyerName"  className="input input-bordered w-full" readOnly/>
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
                <span className="label-text">BuyerMail</span>
            </label>
            <label className="input-group">
                    
                <input type="email" name="BuyerMail"  className="input input-bordered w-full" readOnly />
            </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text">buyingDate</span>
            </label>
            <label className="input-group">

                <input type="date" name="buyingDate" placeholder="buyingDate" className="input input-bordered w-full" />
            </label>
        </div>
    </div>
 

    <input type="submit" value="purchase the Food item" className="btn w-full mt-4 bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ... "/>
</form>
</div>
    );
};

export default FoodPurchase;