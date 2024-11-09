import GlobalStyles from "./styles/GlobalStyles.js";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";

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
        path: "/products",
        element: <Products />,
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
