import GlobalStyles from "./styles/GlobalStyles.js";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import { Button } from "@material-tailwind/react";

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
