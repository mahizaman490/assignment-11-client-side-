import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navlinks = <>
       <li><NavLink to='/'>Home</NavLink></li>
  
    <li><NavLink to='/allfooditems'>All Food items</NavLink></li>
    
    <li><NavLink to='/blog'>Blog</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
  
  
              
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
          <a className="btn btn-ghost normal-case text-2xl">  <h1 className="font-bold bg-gradient-to-r from-[#ff0000] via-orange-500 to-yellow-400  text-transparent   bg-clip-text">FlavorFusion Palace</h1></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
        {/* {
          user ? <>
            <div className="avatar online ">
              <div className="w-8 rounded-full">
                <img src={user.photoURL
                } />
              </div>
            </div>
            <span> <small>{user.displayName
            }</small></span>

            <a onClick={handleLogOut} className="btn btn-sm">Logout</a>
          </>
            : <Link to='/login'>
              <button className="btn btn-sm">Login</button>
            </Link>
        } */}
        </div>
      </div>
    );
};

export default Navbar;