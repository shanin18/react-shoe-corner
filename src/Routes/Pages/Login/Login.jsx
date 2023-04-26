import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    loginWithEmailAndPassword,
    registerWithGoogle,
    registerWithGitHub,
    registerWithFacebook,
    resetUserPassword,
  } = useContext(AuthContext);

  const handleUserLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailAndPassword(email, password)
      .then(() => {
        console.log("login successfully!!");
        navigate(from, { replace: true });
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

  const handleForgetPassword = () => {
    resetUserPassword()
      .then(() => {
        navigate(from, { replace: true });
        console.log("Check you email to reset the password!!");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="border p-5 rounded-lg w-[450px] shadow-xl">
        <h2 className="text-4xl font-bold text-warning text-center mb-8">
          Login
        </h2>
        <form onSubmit={handleUserLoginForm} className="mb-3">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-warning peer"
              placeholder=" "
              autoComplete="username"
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-warning peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-warning peer"
              placeholder=" "
              autoComplete="current-password"
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-warning peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button type="submit" className="btn btn-warning w-full">
            Login
          </button>
        </form>

        <div className="flex justify-between items-center">
          <small>
            New here?
            <Link
              to="/register"
              className="text-yellow-400 hover:underline ml-1"
            >
              Register
            </Link>
          </small>

          <small
            onClick={handleForgetPassword}
            className="text-yellow-400 hover:underline cursor-pointer"
          >
            forget password?
          </small>
        </div>
        <div className="flex items-center justify-center gap-5 my-4">
          <img
            onClick={handleGoogleSignIn}
            className="w-8 cursor-pointer"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
            alt=""
          />
          <img
            onClick={handleGithubSignIn}
            className="w-8 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
          />
          <img
            onClick={handleFacebookSignIn}
            className="w-8 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
