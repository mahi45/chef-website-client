import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import RecipeCategory from "../Pages/Home/RecipeCategory/RecipeCategory";
import ChefsLayout from "../Layouts/ChefsLayout";
import Chefs from "../Pages/Chefs/Chefs/Chefs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/recipe_category/:id",
        element: <RecipeCategory></RecipeCategory>,
      },
    ],
  },
  {
    path: "chefs",
    element: <ChefsLayout></ChefsLayout>,
    children: [
      {
        path: "/chefs/:id",
        element: <Chefs></Chefs>,
      },
    ],
  },
]);

export default router;
