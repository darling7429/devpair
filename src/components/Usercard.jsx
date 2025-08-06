import React from "react";
import { useSelector } from "react-redux";
import { default_url } from "../utils/constants";
import axios from "axios";
import Link from "daisyui/components/link";

const Usercard = (props) => {
  const user = useSelector((store) => store.user);
  const { data } = props;
  const { updatefeed } = props;
  const interested = async (to) => {
    alert(" you are  interested  in " + to);
    const res = await axios.post(
      default_url + "/sendconnection/:status/:userid"
    );
    updatefeed();
  };
  const ignored = (to) => {
    alert(" you have ignored  " + to);
    updatefeed();
  };

  return (
    <>
      {data?.map((data) => {
        const { firstName, lastName, gender, age, avatar, _id } = data;
        return (
          <div
            key={data._id}
            className="w-[25%] bg-base-300 my-10 shadow-lg rounded-lg p-1 shadow-xl">
            <div className="card_img rounded-lg p-4 h-80">
              <img src={avatar} className="rounded-lg w-[100%] h-[100%]" />
            </div>
            <div className="text-center">
              <p>
                <b>
                  {firstName} {lastName}
                </b>
              </p>
              <p>
                <b>
                  {age},{gender}
                </b>
              </p>
            </div>
            <div className="flex gap-2 justify justify-center my-2 ">
              <button
                className="btn btn-error text-white"
                onClick={() => {
                  ignored(data.firstName);
                }}>
                Ignore
              </button>

              <button
                className="btn btn-primary text-white"
                onClick={() => {
                  interested(data.firstName);
                }}>
                interested
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Usercard;
