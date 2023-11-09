
import { Helmet } from "react-helmet";

import { useEffect } from "react";
import { useState } from "react";
import OrderCard from "./OrderCard";
import Swal from "sweetalert2";

const MyOrders = () => {


  const [orders, setOrders] = useState([])
              
  const url = "https://flavor-fusion-palace-server.vercel.app/myorders"
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, []);

  console.log(orders);



  const handleDelete = id => {
    fetch(`https://flavor-fusion-palace-server.vercel.app/myorders/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.deletedCount > 0) {
          // Swal.fire("")

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "order Deleted successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          const remaining = orders.filter(order => order._id !== id)
          setOrders(remaining)

        }



      })




  }




  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FlavourFusion|MyOrders</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="my-10 text-center text-5xl font-bold  bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">My Orders</h2>
      <div className="grid grid-cols-1 gap-8 my-24 ml-40 ">
        {
          orders.map(order => <OrderCard key={order._id} order={order}
            handleDelete={handleDelete}

          ></OrderCard>)
        }

      </div>

    </div>
  );
};

export default MyOrders;