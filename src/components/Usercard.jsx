import React from "react";

const Usercard = (props) => {
  const { data } = props;

  return (
    <>
      {data?.map((data) => {
        const { firstName, lastName, gender, age, skills, avatar, _id } = data;
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
              <button className="btn btn-error text-white">Ignore</button>
              <button className="btn btn-primary text-white">interested</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Usercard;
