import React from "react";

const Usercard = (props) => {
  const { data } = props;
  console.log(data);

  return (
    <>
      {data?.map((data) => {
        return (
          <div
            key={data._id}
            className="w-[25%] bg-base-100 my-10 shadow-lg rounded-lg p-1">
            <div className="card_img rounded-lg p-2 h-80">
              <img src={data.avatar} className="rounded-lg w-[100%] h-[100%]" />
            </div>
            <div className="text-center">
              <p>
                <b>
                  {data?.firstName} {data?.lastName}
                </b>
              </p>
            </div>
            <div className="flex gap-2 justify justify-center my-2 ">
              <button className="btn btn-error text-white">Ignore</button>
              <button className="btn btn-success text-white">interested</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Usercard;
