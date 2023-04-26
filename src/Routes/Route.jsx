import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Cart from "./Pages/Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "./Pages/About";
import Products from "./Pages/Home/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Products></Products>,
      },
      {
        path: "/product/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/details/${params.id}`),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
