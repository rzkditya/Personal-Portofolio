import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Career from "../page/Career";
import Contact from "./Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/Home" replace />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Career",
    element: <Career />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);
