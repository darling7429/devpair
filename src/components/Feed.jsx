import React, { useEffect } from "react";
import { default_url } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { profiles } from "../redux/slices/feedslice";
import Usercard from "./Usercard";

const Feed = () => {
  const dispatch = useDispatch();
  const feeddata = useSelector((store) => store.feed);

  const feedapi = async () => {
    alert("feed api called")
    try {
      const data = await axios.get(default_url + "/feed", {
        withCredentials: true,
      });
      console.log(data);

      dispatch(profiles(data.data));
    } catch (error) {
      alert(error.resposne.data);
    }
  };
  useEffect(() => {
    feedapi();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <Usercard data={feeddata} updatefeed={feedapi} />
    </div>
  );
};

export default Feed;
