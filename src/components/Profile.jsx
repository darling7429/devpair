import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { default_url } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { adduser } from "../redux/slices/userslice";

const Profile = () => {
  const user = useSelector((store) => store.user);
  const [firstName, setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [age, setage] = useState("");

  const [gender, setgender] = useState("");
  const [avatar, setavatar] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setfirstname(user.firstName);
      setlastname(user.lastName);
      setage(user.age);
      setgender(user.gender);
      setavatar(user.avatar);
    }
  }, [user]);

  const editprofile = async () => {
    const res = await axios.patch(
      default_url + "/updateprofile",
      { firstName, lastName, age, gender, avatar },
      { withCredentials: true }
    );

    dispatch(adduser(res.data.data));
    alert("user updated succesfully");
  };
  return (
    user && (
      <>
        <div className="profile_container w-[100%] mt-20  flex flex-col items-center">
          <div className="w-[40%] bg-base-300 flex flex-col  items-center p-3 rounded-lg">
            <p className="capitalize text-xl">
              Hello <b>{user.lastName} </b>Edit your profile here
            </p>
            <div className="flex flex-col w-[50%] mt-10 ">
              <div className="flex flex-col">
                <label>Firstname:</label>
                <input
                  type="text"
                  className="m-2 rounded-md p-3"
                  placeholder="Firstname"
                  value={firstName}
                  onChange={(e) => {
                    setfirstname(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label>Lastname:</label>
                <input
                  type="text"
                  className="m-2 rounded-md p-3"
                  placeholder="lastname"
                  value={lastName}
                  onChange={(e) => {
                    setlastname(e.target.value);
                  }}
                />
              </div>

              <div className=" flex flex-col">
                <label>Gender</label>
                <input
                  type="text"
                  className="m-2 rounded-md p-3"
                  placeholder="gender"
                  value={gender}
                  onChange={(e) => {
                    setgender(e.target.value);
                  }}
                />
              </div>
              <div className=" flex flex-col">
                <label>Age:</label>
                <input
                  type="text"
                  className="m-2 rounded-md p-3"
                  placeholder="gender"
                  value={age}
                  onChange={(e) => {
                    setage(e.target.value);
                  }}
                />
              </div>
              <div className=" flex flex-col">
                <label>Image_url</label>
                <input
                  type="text"
                  className="m-2 rounded-md p-3"
                  placeholder="image_url"
                  value={avatar}
                  onChange={(e) => {
                    setavatar(e.target.value);
                  }}
                />
              </div>
            </div>
            <button
              className="btn btn-primary text-white"
              onClick={editprofile}>
              Save Changes
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default Profile;
