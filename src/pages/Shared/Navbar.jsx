 "react-router-dom";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navlinks = <>
       <li><NavLink to='/'>Home</NavLink></li>
  
    <li><NavLink to='/allfooditems'>All Food items</NavLink></li>
    
    <li><NavLink to='/blog'>Blog</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
 
  
  
              
    </>

    const nav2link = <>
      <li><NavLink to='/myaddedfooditems'>My Added Food Items</NavLink></li>
  
    <li><NavLink to='/addafooditem'>Add A Food Item</NavLink></li>
    
    <li><NavLink to='/myorderpage'>My Ordered Food Items</NavLink></li>
    
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case md:text-2xl">  <h1 className="font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">FlavorFusion Palace</h1></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navlinks}
          </ul>
        </div>
        <div className="navbar-end md:ml-48 lg:ml-72 hidden md:block  ">
      
        <div className="flex">
  <div className="dropdown">
            <label tabIndex={0} className="btn rounded-full btn-ghost w-20">
            <img  src='https://i.ibb.co/ZMSVH3f/trash-bin-front-side-with-white-background.jpg' className="rounded-full" />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {nav2link}
            </ul>
          </div>
        <div className="md:block mt-5">
       
           <small className="block">User Name</small>
        </div>
        </div>
        </div>
      
         <button className="btn btn-warning  btn-sm ml-24">LogOut</button>
           
      
      </div>
    );
};

export default Navbar;