import { Link } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";


const Login = () => {
  const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget)
    console.log(form.get('email'));
  }
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl my-10 text-center">Please login</h2>
        <form onSubmit={handleLogin} className=" md:w-3.4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input  style={{color:"white"}}type="email" required name="email" placeholder=" Enter Your Email Address" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
                </label>
                <input style={{color:"white"}} type="password" placeholder="password" required name=" Enter Your Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                    </form>
                    </div>
                    <p className="text-center mt-4">Do not have an account <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
                    </div>
    );
};

export default Login;