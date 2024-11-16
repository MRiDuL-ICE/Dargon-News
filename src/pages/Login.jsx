import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    userLogin(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast.success('Login done')
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        const errCode = err.code;
        const errMsg = err.message;
        toast.error(errMsg);
        // console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-4/12 mx-auto h-[40rem] shrink-0 rounded-md shadow-2xl py-14">
        <h2 className="text-4xl font-bold text-center mb-8">
          Login to your account
        </h2>
        <div className="w-10/12 mx-auto mt-6">
          <hr />
        </div>
        <form
          onSubmit={handleSignIn}
          className="card-body w-10/12 mx-auto flex gap-8"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold text-slate-600">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input bg-base-200 rounded-md h-[56px]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold text-slate-600">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input bg-base-200 rounded-md h-[56px]"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition:Bounce
            />
            <div className="my-4 text-center">
              <p className="font-bold text-slate-700">
                Dont’t Have An Account ?{" "}
                <Link className="text-orange-400" to="/auth/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
