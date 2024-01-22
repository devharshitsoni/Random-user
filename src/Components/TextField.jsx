import React from "react";

const TextField = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      onChange={props.onChange}
    />
  );
};

export default TextField;
