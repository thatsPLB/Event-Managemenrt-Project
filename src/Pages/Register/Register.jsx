import { Link } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
  const {createUser} = useContext(AuthContext);

  const handleRegister = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    const name= form.get('name')
    const photo = form.get('photo')
    console.log(name,photo,email,password);

    createUser(email,password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.error(error)
    })
  }
    return (
      <div>
      <Header></Header>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl my-10 text-center">Please Register</h2>
        <form onSubmit={handleRegister} className=" md:w-3.4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input  style={{color:"white"}}type="text" required name="name" placeholder=" Enter Your Name" className="input input-bordered" required />
            </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input style={{color:"white"}} type="text" required name="photo" placeholder=" Enter Your Photo URL" className="input input-bordered" required />
            </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input style={{color:"white"}} type="email" required name="email" placeholder=" Enter Your Email Address" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
                </label>
                <input style={{color:"white"}} type="password" required name="password" placeholder=" Enter Your Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                    </form>
                    </div>
                    <p className="text-center mt-4">Already have an account <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
                    </div>
    );
};

export default Register;