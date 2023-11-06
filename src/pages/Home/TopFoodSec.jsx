import { Link } from "react-router-dom";

const TopFoodSec = () => {
    return (
        <>
    
          <h2 className="mt-40 mb-14 text-center text-5xl font-bold  bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Top Foods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5" data-aos="zoom-in-down">
        <div  className="card lg:card-side bg-base-100  border-orange-600 border" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
  <figure><img src="https://i.ibb.co/mHQ06rg/top-view-table-full-food.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">name</h2>
    <p>category:</p>
    <p>price:</p>
    <div className="card-actions justify-end">
 <Link to='/singlefooditem'>     <button className="btn  bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ... ">Details</button></Link>
    </div>
  </div>
</div>
<div className="card lg:card-side bg-base-100  border-orange-600 border ">
  <figure><img src="https://i.ibb.co/mHQ06rg/top-view-table-full-food.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">name</h2>
    <p>category:</p>
    <p>price:</p>
    <div className="card-actions justify-end">
 <Link to='/singlefooditem'><button className="btn  bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ... ">Details</button></Link>
    </div>
  </div>
</div>
<div className="card lg:card-side bg-base-100  border-orange-600 border ">
  <figure><img src="https://i.ibb.co/mHQ06rg/top-view-table-full-food.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">name</h2>
    <p>category:</p>
    <p>price:</p>
    <div className="card-actions justify-end">
 <Link to='/singlefooditem'>     <button className="btn  bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ... ">Details</button></Link>
    </div>
  </div>
</div>
<div className="card lg:card-side bg-base-100  border-orange-600 border ">
  <figure><img src="https://i.ibb.co/mHQ06rg/top-view-table-full-food.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">name</h2>
    <p>category:</p>
    <p>price:</p>
    <div className="card-actions justify-end">
 <Link to='/singlefooditem'>     <button className="btn  bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ... ">Details</button></Link>
    </div>
  </div>
</div>
<div className="card lg:card-side bg-base-100  border-orange-600 border ">
  <figure><img src="https://i.ibb.co/mHQ06rg/top-view-table-full-food.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">name</h2>
    <p>category:</p>
    <p>price:</p>
    <div className="card-actions justify-end">
 <Link to='/singlefooditem'>     <button className="btn  bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ... ">Details</button></Link>
    </div>
  </div>
</div>
<div className="card lg:card-side bg-base-100  border-orange-600 border ">
  <figure><img src="https://i.ibb.co/mHQ06rg/top-view-table-full-food.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">name</h2>
    <p>category:</p>
    <p>price:</p>
    <div className="card-actions justify-end">
 <Link to='/singlefooditem'>     <button className="btn  bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ... ">Details</button></Link>
    </div>
  </div>
</div>
            
        </div>
        </>
    );
};

export default TopFoodSec;