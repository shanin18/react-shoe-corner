import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../../public/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaAlignRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, userLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    userLogOut();
  };

  return (
    <nav className="bg-yellow-400 px-2 py-3">
      <div className="container mx-auto lg:flex items-center justify-between">
        <div className="flex items-center justify-between">
          <img src={logo} alt="brand logo" className="w-20" />
          <div
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            className="lg:hidden"
          >
            {!menuOpen ? (
              <FaAlignRight className="text-xl mr-3"></FaAlignRight>
            ) : (
              <AiOutlineClose className="text-2xl mr-3"></AiOutlineClose>
            )}
          </div>
        </div>

        <div>
          {!menuOpen ? (
            <div className="hidden lg:block">
              <div
                className={`flex flex-col lg:flex-row items-center gap-10 text-lg font-semibold`}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/cart"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  <FaShoppingCart></FaShoppingCart>
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  About
                </NavLink>
                <div>
                  {!user && (
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "text-white" : ""
                      }
                    >
                      Login
                    </NavLink>
                  )}

                  {user && (
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img src={user.photoURL} alt="" />
                        </div>
                      </label>
                      <ul
                        onClick={handleLogOut}
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a>Logout</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`flex flex-col lg:flex-row items-center gap-10 text-lg font-semibold`}
            >
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                <FaShoppingCart></FaShoppingCart>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                About
              </NavLink>
              <div>
                {!user && (
                  <NavLink
                    to="/login"
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                  >
                    Login
                  </NavLink>
                )}

                {user && (
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={user.photoURL} alt="" />
                      </div>
                    </label>
                    <ul
                      onClick={handleLogOut}
                      tabIndex={0}
                      className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Logout</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
