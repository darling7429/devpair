import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);

  return <>{user ? "hello" + user.firstName : "nouser"}</>;
};

export default Profile;
