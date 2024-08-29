import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Main } from "./components/Main";


import Home from "./components/Home/Home";
import About from "./components/About/About";
import OurServices from "./components/OurServices/OurServices";
import Testimonial from "./components/Testimonial/Testimonial";
import Pricing from "./components/Pricing/Pricing";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",

        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <OurServices />
      },
      {
        path: "/testimonial",
        element: <Testimonial />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);