import React, { useEffect, useState } from "react";
import reactDom from "react-dom";
import useHover from "../hooks/useHover";

const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [cord, setCord] = useState({
    x: 0,
    y: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
  });
  useEffect(() => {
    return () => {
      if (hovered) {
        console.log(cord);
        setCord(nodeRef.current.getBoundingClientRect());
      }
    };
  }, [hovered]);
  return (
    <div>
      {hovered && (
        <TooltipContent
          style={{
            left: cord.left + cord.width / 2,
            top: cord.top - cord.height - 24 + window.scrollY,
          }}
          cord={cord}
        >
          {children}
        </TooltipContent>
      )}
      <span className="absolute left-[50%] text-base " ref={nodeRef}>
        {text}
      </span>
    </div>
  );
};
function TooltipContent({ children, cord }) {
  if (typeof document == "undefined") return null;

  return reactDom.createPortal(
    <p
      style={{
        left: cord.left  + cord.width / 2,
        top: cord.top - cord.height - 24 + window.scrollY,
      }}
      className="absolute inline-block p-3 text-white bg-black rounded-xl -translate-x-2/4"
    >
      {children}
    </p>,
    document.querySelector("body")
  );
}
export default Tooltip;
