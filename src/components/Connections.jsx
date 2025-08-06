import React, { useEffect } from "react";
import { default_url } from "../utils/constants";
import axios from "axios";
import { addconnections } from "../redux/slices/connections";
import { useDispatch, useSelector } from "react-redux";

const Connections = () => {
  const dispatch = useDispatch();
  const connections=useSelector((store)=>store.connections)
  const fetchconnections = async () => {
    const res = await axios.get(default_url + "/user/connections", {
      withCredentials: true,
    });
    dispatch(addconnections(res.data.connections));
  };

  useEffect(() => {
    fetchconnections();
  }, []);
 if (!connections ) return;
  if (connections.length == 0) return "No Connections  found ";

  return (
    <>
      <div className="w-[100%] flex flex-col items-center justify-center">
        {connections?.map((data) => {
          const { firstName, lastName, avatar,age,gender } = data.fromuser_id;
          const { _id } = data;
          return (
            <div
              className="flex flex-row  items-center rounded-lg justify-around w-[25%] h-[180px] mt-10 bg-base-300  "
              key={data._id}>
              <div className="w-[25%] items-center">
                <img src={avatar} className="w-[100%] rounded-[50%]" />
              </div>
              <div>
                <p className="text-2xl capitalize">
                  {firstName} {lastName}
                </p>
                <p className="capitalize">{age},{gender}</p>
              </div>
             
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Connections;
