import Layout from "../layouts/Layout";
import HomePage from "../pages/home/page";
import ProductsPage from "../pages/products/page";
import AboutPage from "../pages/about/page";
import ContactPage from "../pages/contact/page";
import ErrorPage from "../pages/error/page";
import LoginPage from "../pages/login/page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    // PUBLIC ROUTES
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: null,
      },

      {
        path: "/products",
        element: <ProductsPage />,
        loader: null,
      },

      {
        path: "/about",
        element: <AboutPage />,
        loader: null,
      },

      {
        path: "/contact",
        element: <ContactPage />,
        loader: null,
      },

      {
        path: "/products",
        element: <ProductsPage />,
        loader: null,
      },

      {
        path: "/login",
        element: <LoginPage />,
      }
    ],
  },
]);
