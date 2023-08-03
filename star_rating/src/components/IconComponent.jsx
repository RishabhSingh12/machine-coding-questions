import React from "react";
import { useState } from "react";

const IconComponent = ({ showIcon }) => {
  const [filled, setFilled] = useState(null);
  const [hover, setHover] = useState(null);

  const iconArr = Array(5).fill(showIcon);

  const filledArray = () => {
    return iconArr.map((ele, idx) => {
      if (idx <= filled && filled !== null) {
        return (
          <span key={idx} data-id={`${idx}`} className="icon">
            &#9733;
          </span>
        );
      } else if (idx <= hover && hover !== null) {
        return (
          <span key={idx} data-id={`${idx}`} className="icon">
            &#9733;
          </span>
        );
      } else {
        return (
          <span key={idx} data-id={`${idx}`} className="icon">
            {/* &#9733; */}
            &#9734;
          </span>
        );
      }
    });
  };

  const handleIconClick = (e) => {
    setFilled(e.target.dataset.id);
  };

  const handleMouseHover = (e) => {
    setHover(e.target.dataset.id);
  };

  const handleMouseLeave = (e) => {
    setHover(null);
  };

  return (
    <div
      onClick={handleIconClick}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
      className="display-container"
    >
      {filledArray().map((ele, idx) => ele)}
    </div>
  );
};

export default IconComponent;
