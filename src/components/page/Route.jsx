import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from '../page/Home'
import About from '../page/About'
import Portfolio from '../page/Portfolio'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to='/Home' replace/>,
    },
    {
        path: "/Home",
        element: <Home/>,
    },
    {
        path: "/About",
        element: <About/>,
    },
    {
        path: "/Portfolio",
        element: <Portfolio/>,
    },
])
