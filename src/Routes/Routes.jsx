import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ChefsLayout from "../Layouts/ChefsLayout";
import ChefDetais from "../Pages/Chefs/ChefDetails/ChefDetais";
import Blog from "../Pages/Blog/Blog";
import BlogLayout from "../Layouts/BlogLayout";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home"></Navigate>,
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
  {
    path: "/home",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/chefs",
    element: <ChefsLayout></ChefsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ChefDetais></ChefDetais>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment10-server-mahi45.vercel.app/chefs/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/blog",
    element: <BlogLayout></BlogLayout>,
    children: [
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
