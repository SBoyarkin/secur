import {createBrowserRouter} from "react-router";
import {LoginPage} from "./pages/LoginPage/LoginPage.jsx";
import {MainPage} from "./pages/MainPage/MainPage.jsx";
import {UserList} from "./pages/UserList/UserList.jsx";

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
      {
        path: 'users',
        Component: UserList,
      }
    ],

  },
]);

