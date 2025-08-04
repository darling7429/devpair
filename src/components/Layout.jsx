import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

import { default_url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../redux/slices/userslice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Layout = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetch_user = async () => {
    if (!user?._id) {
      try {
        const res = await axios.get(default_url + "/profile", {
          withCredentials: true,
        });

        dispatch(adduser(res.data));
      } catch (error) {
        if (error.response.status === 400) {
          navigate("/login");
        }
      }
    }
  };

  useEffect(() => {
    fetch_user();
  }, []);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
