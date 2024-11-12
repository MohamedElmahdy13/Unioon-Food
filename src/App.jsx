import GlobalStyles from "./styles/GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./Layouts/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import ProductsDetails from "./pages/ProductsDetails";
import Auth from "./pages/Auth";
import Login from "./features/Authentication/Login";
import Signup from "./features/Authentication/Signup";

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
        path: "category/:name",
        element: <Category />,
      },
      {
        path: "product/:name",
        element: <ProductsDetails />,
      },

      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "/auth", // Redirect from /auth to /auth/login
            element: <Navigate to="login" />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
    ],
  },
]);
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={routes}></RouterProvider>
    </ThemeProvider>
  );
}
