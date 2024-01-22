import React from "react";
const User = (props) => {
  return (
    <div className="border-[3px] card p-[10px]">
      <div className="card-body text-center ">
      <img src={props.picture.large} alt="Male Avatar" className="h-[100px] mx-auto my-auto flex flex-col justify-center w-[100px] mb-5 rounded-full object-cover" />
        <h5 className="card-title">Name: {props.name.first}</h5>
        <p className="card-text">Phone: {props.phone}</p>
        <p className="card-text">Gender: {props.gender}</p>
        
        
      </div>
    </div>
  );
};
  export default User;