import React, { useEffect, useState } from "react";
import { default_url } from "../utils/constants";
import axios from "axios";
import { addrequests } from "../redux/slices/requests";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Requests = () => {
  const [toast, showtoast] = useState(false);
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const fetchrequests = async () => {
    try {
      const res = await axios.get(default_url + "/user/requests", {
        withCredentials: true,
      });

      dispatch(addrequests(res.data));
    } catch (error) {}
  };
  const acceptrequest = async (id) => {
    try {
      const accepted = await axios.post(
        default_url + `/user/review/accepted/${id}`,
        {},
        { withCredentials: true }
      );
      alert(accepted.data.message);
    } catch (error) {
      alert(error.response.message);
    }
  };
  const rejectrequest = async (id) => {
    try {
      const rejected = await axios.post(
        default_url + `/user/review/rejected/${id}`,
        {},
        { withCredentials: true }
      );
      alert(rejected.data.message);
    } catch (error) {
      alert(error.response.message);
    }
  };

  useEffect(() => {
    fetchrequests();
  }, []);
  if (!requests) return;
  if (requests.length == 0) return <h1 className="text-center capitalize">no requests found </h1>;

  return (
    <>
      <div className="w-[100%] flex flex-col items-center justify-center">
        {requests?.map((data) => {
          const { firstName, lastName, avatar } = data.fromuser_id;
          const { _id } = data;
          return (
            <div
              className="flex flex-row  items-center justify-between w-[70%] h-[100px] mt-10"
              key={data._id}>
              <div className="w-[12%] items-center">
                <img src={avatar} className="w-[50%] rounded-[50%]" />
              </div>
              <div>
                <p className="text-2xl">
                  {firstName} {lastName}
                </p>
              </div>
              <div className="flex justify-between gap-4">
                <button
                  className="btn btn-error"
                  onClick={() => {
                    rejectrequest(_id);
                  }}>
                  Reject
                </button>
                <button
                  className=" btn  btn-success"
                  onClick={() => {
                    acceptrequest(_id);
                  }}>
                  Accept
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {toast ? (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>connection successfully</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Requests;
