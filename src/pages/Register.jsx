import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const photourl = e.target.photourl.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value

    const form = new FormData(e.target);

    const name = form.get("name");
    const photourl = form.get("photourl");
    const email = form.get("email");
    const password = form.get("password");

    // console.log({ name, photourl, email, password });

    createNewUser(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        setUser(user);
        toast.success("Registration done");
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.code);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-5/12 mx-auto h-auto shrink-0 rounded-md shadow-2xl py-8">
        <h2 className="text-4xl font-bold text-center mb-8 mt-8">
          Register your account
        </h2>
        <div className="w-10/12 mx-auto mt-6">
          <hr />
        </div>
        <form
          onSubmit={handleSubmit}
          className="card-body w-10/12 mx-auto flex gap-4"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold text-slate-600">
                Your Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input bg-base-200 rounded-md h-[56px]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold text-slate-600">
                Photo URL
              </span>
            </label>
            <input
              type="url"
              name="photourl"
              placeholder="Enter your photo URL"
              className="input bg-base-200 rounded-md h-[56px]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold text-slate-600">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              className="input bg-base-200 rounded-md h-[56px]"
              required
            />
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
              <input
                type="checkbox"
                name="checkbox"
                className="checkbox checkbox-primary rounded-sm"
                required
              />
              <span className="label-text">
                Accept our{" "}
                <Link to="/terms" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </Link>
              </span>
            </label>
          </div>

          <div className="form-control mt-2">
            <button className="btn btn-neutral">Register</button>
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
                Already Have An Account?{" "}
                <Link className="text-orange-400" to="/auth/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
