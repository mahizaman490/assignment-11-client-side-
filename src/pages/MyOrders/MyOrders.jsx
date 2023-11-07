import { Helmet } from "react-helmet";

const MyOrders = () => {
    return (
        <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>FlavourFusion|MyOrders</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="my-10 text-center text-5xl font-bold  bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">My Orders</h2>
            <div className="grid grid-cols-1 gap-8 my-24 ml-40 ">


            <div className="card lg:card-side -54 w-10/12  ">
  <figure><img className="w-40 rounded-full" src="https://i.ibb.co/mHQ06rg/top-view-table-full-food.jpg" alt="Album"/></figure>
  <div className="card-body">
    
    <div className="flex ">
   
    <p className="mt-4">Name</p>
    <p className="mt-4">Owner:</p>
    <p className="mt-4">price:</p>
    <p className="mt-4">Order time:</p>
    <button className="btn bg-white"><img className="w-10 rounded-full" src="https://i.ibb.co/ZMSVH3f/trash-bin-front-side-with-white-background.jpg" alt="" /></button>
    </div>
  
  </div>
</div>
                </div>
            
        </div>
    );
};

export default MyOrders;