import {createBrowserRouter} from "react-router";
import {LoginPage} from "./pages/LoginPage/LoginPage.jsx";
import {MainPage} from "./pages/MainPage/MainPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
    children: [
    ],

  },
      {
    path: "/",
    Component: MainPage,
    children: [
    ],

  },
]);

