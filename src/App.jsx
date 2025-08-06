import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import store from "./redux/store.js";
import Feed from "./components/Feed.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Profile from "./components/Profile.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./components/Layout.jsx";
import Requests from "./components/Requests.jsx";
import Connections from "./components/Connections.jsx";
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
        {
          path: "/myrequests",
          element: <Requests />,
        },
        {
          path: "/myconnections",
          element: <Connections />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
};

export default App;
