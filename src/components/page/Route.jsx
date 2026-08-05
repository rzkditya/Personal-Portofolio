import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Experiences from "../page/Experience";
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
    path: "/Experiences",
    element: <Experiences />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);
