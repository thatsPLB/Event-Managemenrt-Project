import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Shared/Contact/Contact";
import About from "../Pages/Shared/About/About";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('/data.json')
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/contact',
          element: <Contact></Contact>
        },
        {
          path:'/about',
          element: <About></About>
        }
       

      ]
    },
  ]);
  export default router;