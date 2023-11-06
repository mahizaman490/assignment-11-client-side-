import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = {

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-2/4 ">
          <div className="">
            <h1 className="text-5xl font-bold text-orange-500">Register now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" placeholder="PhotoURL" name="photo" className="input input-bordered" required />
              </div>
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
             
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ...">Login</button>
              </div>
            </form>
            <p className="pb-3 pl-3"><span className="text-red-500 ">have an account here? </span> <Link to='/login' className="text-red-500 underline">LogIn</Link></p>
            <p><button className="btn btn-ghost w-full mb-2"> SignIn with Google</button></p>
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