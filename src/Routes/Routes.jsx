import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import RecipeCategory from "../Pages/Home/RecipeCategory/RecipeCategory";
import ChefsLayout from "../Layouts/ChefsLayout";
import Chefs from "../Pages/Chefs/Chefs/Chefs";
import ChefDetais from "../Pages/Chefs/ChefDetails/ChefDetais";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/chefs",
    element: <ChefsLayout></ChefsLayout>,
    children: [
      {
        path: "/chefs/:id",
        element: <ChefDetais></ChefDetais>,
      },
    ],
  },
]);

export default router;
