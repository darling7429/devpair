import { useState } from "react";
import { validation } from "./utils/validation";
import axios from "axios";

const Login = () => {
  const [pass, showpass] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  //const [error, seterror] = useState("");
  const handleemail = (e) => {
    setemail(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };
  const handleform = async (e) => {
    e.preventDefault();
    try {
      const isvalid = validation(email, password);
      if (isvalid) {
        const data = {
          emailId: email,
          password: password,
        };
        const res = await axios.post("http://localhost:3000/login", data, {
          withCredentials: true,
        });

        console.log(res);
        //window.location.href = "/";

        //   setemail("");
        //   setpassword("");
      }
    } catch (error) {
      alert(error.response.data)
    }
  };

  return (
    <>
      <div className=" w-[100%]   flex flex-col items-center justify-center">
        <form
          className="bg-gray-300 w-[25%]     text-center rounded-lg p-2 mt-[9%]"
          onSubmit={handleform}>
          <div className="form_header pt-2">
            <p className="text-2xl font-bold capitalize">DevPair Login form</p>
          </div>
          <div className="form-body flex flex-col w-[70%] mx-auto relative ">
            <input
              required
              type="text"
              placeholder="EmailId"
              className="my-10 p-1.5 rounded-lg border-none outline-none"
              value={email}
              onChange={handleemail}
            />
            <input
              type={pass ? "text" : "password"}
              placeholder="Password"
              className=" p-1.5 rounded-lg border-none outline-none"
              value={password}
              onChange={handlepassword}
              required
            />
            {password ? (
              <span
                className="absolute top-[80%] left-[80%] cursor-pointer"
                onClick={() => {
                  showpass(!pass);
                }}>
                {pass ? "hide" : "show"}
              </span>
            ) : (
              ""
            )}
          </div>

          <div className="my-5">
            <button className=" btn  btn-success p-2 text-xl rounded-lg text-white ">
              Login Here
            </button>
            <p className=" w-[70%] mx-auto mt-4 ">
              By tapping on login, you agree to our{" "}
              <a href="/terms" target="_blank">
                Terms and Conditions
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
