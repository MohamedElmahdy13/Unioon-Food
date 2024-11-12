import GlobalStyles from "./styles/GlobalStyles.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import ProductsDetails from "./pages/ProductsDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/category/:name",
        element: <Category />,
      },
      {
        path: "product/:name",
        element: <ProductsDetails />,
      },
    ],
  },
]);
export default function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
