import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }
])
