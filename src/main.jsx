import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Error from "./components/Error.jsx";
import Feed from "./components/Feed.jsx";
import Profile from "./components/Profile.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/userprofile",
        element: <Profile />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
