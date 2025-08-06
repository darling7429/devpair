import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { default_url } from "../utils/constants";
import axios from "axios";
import { removeuser } from "../redux/slices/userslice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handlelogout = async () => {
    await axios.post(default_url + "/logout", {}, { withCredentials: true });
    dispatch(removeuser());
    navigate("/login");
  };

  return (
    <div className="w-[100%]">
      <div className="navbar shadow-sm bg-base-300">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl text-white" to="/">
            🧑🏼‍💻 DevPair
          </Link>
        </div>
        {user ? (
          <div className="flex items-center gap-2 mx-16">
            {user ? (
              <p className="text-white">
                welcome <b>{user.firstName + " " + user.lastName}</b>
              </p>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            <div className="dropdown dropdown-end  ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={user?.avatar} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <Link className="justify-between" to="/userprofile">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link className="justify-between" to="/myrequests">
                    Review requests
                  </Link>
                </li>
                <li>
                  <Link to="/myconnections">connections</Link>
                </li>
                <li onClick={handlelogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          "You can login now "
        )}
      </div>
    </div>
  );
};

export default Header;
