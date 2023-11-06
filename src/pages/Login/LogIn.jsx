import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const LogIn = () => {
    const handleLogin ={

    }
    return (
      <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>FlavourFusion|LogIn</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-2/4">
          <div className="">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">Login now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
             
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ...">Login</button>
              </div>
            </form>
            <p className="pb-3 pl-3"><span className="text-black">new here? </span> <Link to='/register' className="text-white underline">Register</Link></p>
            <p><button className="btn btn-ghost w-full mb-2 text-black"> SignIn with Google</button></p>
          </div>
          {/* {
          loginError && <p className="text-red-700">{loginError}</p>
        } */}
        </div>
       <div className="w-full">
        <img src="https://i.ibb.co/fnkD2wG/4189694-2238239.jpg" alt="" />
       </div>
      </div>
      </>
     
    );
};

export default LogIn;