import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    createUserWithPasswordAndEmail,
    registerWithGoogle,
    registerWithGitHub,
    registerWithFacebook,
  } = useContext(AuthContext);

  const handleCreateUserForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;

    setPasswordError("");
    if (password != confirmPassword) {
      return setPasswordError("password not matched!!");
    } else if (password.length < 7) {
      return setPasswordError("password should at least 8 characters!!");
    }

    createUserWithPasswordAndEmail(email, password)
      .then(() => {
        navigate(from, { replace: true });
        console.log("login successfully!!");
        form.reset();
      })
      .catch((err) => console.log(err.message));
  };

  const handleGoogleSignIn = () => {
    registerWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
        console.log("login successfully!!");
      })
      .catch((err) => console.log(err.message));
  };
  const handleGithubSignIn = () => {
    registerWithGitHub()
      .then(() => {
        navigate(from, { replace: true });
        console.log("login successfully!!");
      })
      .catch((err) => console.log(err.message));
  };
  const handleFacebookSignIn = () => {
    registerWithFacebook()
      .then(() => {
        navigate(from, { replace: true });
        console.log("login successfully!!");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="border p-5 rounded-lg w-[450px] shadow-xl">
        <h2 className="text-4xl font-bold text-warning text-center mb-8">
          Register
        </h2>
        <form onSubmit={handleCreateUserForm} className="mb-3">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-warning peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-warning  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-warning peer"
              placeholder=" "
              autoComplete="username"
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-warning  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-warning peer"
              placeholder=" "
              autoComplete="new-password"
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-warning peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="confirm_password"
              id="confirm_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-warning peer"
              placeholder=" "
              autoComplete="new-password"
              required
            />
            <label
              htmlFor="confirm_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-warning peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
            <small className="text-red-500">{passwordError}</small>
          </div>
          <button type="submit" className="btn btn-warning w-full">
            Register
          </button>
        </form>
        <small>
          Already have an account?
          <Link to="/login" className="text-yellow-400 hover:underline ml-1">
            Login
          </Link>
        </small>
        <div className="flex items-center justify-center gap-5 my-4">
          <img
            onClick={handleGoogleSignIn}
            className="w-9 rounded-full cursor-pointer"
            src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo.png"
            alt=""
          />
          <img
            onClick={handleGithubSignIn}
            className="w-12 rounded-full cursor-pointer"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt=""
          />
          <img
            onClick={handleFacebookSignIn}
            className="w-9 rounded-full cursor-pointer"
            src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
