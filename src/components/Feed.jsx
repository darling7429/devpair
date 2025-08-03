import React, { useEffect } from "react";
import { default_url } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { profiles } from "../redux/slices/feedslice";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const feeddata = useSelector((store) => store.feed);
  const feedapi = async () => {
    if (!feeddata) {
      return;
    }
    try {
      const data = await axios.get(default_url + "/feed", {
        withCredentials: true,
      });

      dispatch(profiles(data.data));
    } catch (error) {
      alert(error.resposne.data);
    }
  };
  useEffect(() => {
    feedapi();
  }, []);
  return <div>{feeddata.length != 0 && <p>welcome to feed</p>}</div>;
};

export default Feed;
