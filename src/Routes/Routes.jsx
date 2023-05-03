import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ChefsLayout from "../Layouts/ChefsLayout";
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
        path: ":id",
        element: <ChefDetais></ChefDetais>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
    ],
  },
]);

export default router;
