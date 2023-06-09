import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import DashboardLayout from "../Layout/DashboardLayout";
import Analytics from "../components/Analytics";
import Ecommerce from "../components/Ecommerce";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "ecommerce",
        element: <Ecommerce />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
    ],
  },
]);
