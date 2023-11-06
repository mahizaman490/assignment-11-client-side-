import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = {

    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col w-2/4 ">
          <div className="">
            <h1 className="text-5xl  font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">Register now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  ">
            <form onSubmit={handleRegister} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">PhotoURL</span>
                </label>
                <input type="text" placeholder="PhotoURL" name="photo" className="input input-bordered" required />
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
            <p className="pb-3 pl-3"><span className="text-black ">have an account here? </span> <Link to='/login' className="text-white font-bold underline">LogIn</Link></p>
            <p><button className="btn btn-ghost w-full mb-2 text-slate-950"> SignIn with Google</button></p>
          </div>
          {/* {
          loginError && <p className="text-red-700">{loginError}</p>
        } */}
        </div>
       <div className="w-full">
        <img src="https://i.ibb.co/fnkD2wG/4189694-2238239.jpg" alt="" />
       </div>
      </div>
    );
};

export default Register;