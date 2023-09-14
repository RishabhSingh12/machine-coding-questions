import React from "react";

const ButtonAction = ({ handleClick, type, className }) => {
  return (
    <div className={className} onClick={handleClick}>
      {type}
    </div>
  );
};

export default ButtonAction;
