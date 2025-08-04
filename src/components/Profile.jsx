import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);
  const updateprofile = () => {};

  return (
    <>
      <p className="text-2xl font-bold text-center">Devpair User profile</p>
      <div className="profile_container w-[100%] mt-36  flex flex-col items-center">
        <div className="w-[40%] bg-gray-200 flex flex-col  items-center p-3 rounded-lg">
          <p className="capitalize">
            Hello <b>{user?.lastName}</b>
          </p>
          <div className="flex flex-col w-[50%]">
            <input
              type="text"
              className="m-2 rounded-md p-2"
              placeholder="Firstname"
            />
            <input
              type="text"
              className="m-2 rounded-md p-2"
              placeholder="lastname"
            />
            <input
              type="text"
              className="m-2 rounded-md p-2"
              placeholder="skills"
            />
            <input
              type="text"
              className="m-2 rounded-md p-2"
              placeholder="gender"
            />
          </div>
          <button
            className="btn btn-success text-white"
            onClick={updateprofile}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
