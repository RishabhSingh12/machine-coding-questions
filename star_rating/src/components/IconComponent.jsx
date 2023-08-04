import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
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

  const containerRef = useRef(null);

  useEffect(() => {
    return () => {
      containerRef.current.removeEventListener("click", containerRef.current);
      containerRef.current.removeEventListener(
        "mouseenter",
        containerRef.current
      );
      containerRef.current.removeEventListener(
        "mouseleave",
        containerRef.current
      );
    };
  }, []);

  const handleIconClick = (e) => {
    setHover(null);
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
      ref={containerRef}
      onClick={handleIconClick}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
      className="display-container"
    >
      {/* {filledArray().map((ele, idx) => ele)} */}

      {...iconArr.map((ele, idx) => {
        return (
          <span
            key={idx}
            data-id={`${idx}`}
            className={`${
              (idx <= hover && hover !== null) ||
              (idx <= filled && filled !== null)
                ? "on"
                : "off"
            } icon`}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default IconComponent;
