import React, { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import reactDom from "react-dom";
const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutside();
  const [cord, setCord] = useState({x: 0, y: 0, left: 0, right: 0, top: 0, width: 0});
  const handleClick = (e) => {
    const cord = console.log(nodeRef.current.getBoundingClientRect());
    setCord(nodeRef.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div className="relative w-full max-w-[400px]" ref={nodeRef}>
      <div
        className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        Selected
      </div>
      {show && cord && <DropdownList style={{left: cord.left, top: cord.top, width: cord.width}} cord={cord}></DropdownList>}
    </div>
  );
};

function DropdownList({ cord }) {
  if (typeof document === "undefined") return null;
  return reactDom.createPortal(
    <div
      className="absolute left-0 w-full bg-white border border-gray-200 rounded-lg top-full"
      style={{ left: cord.left, top: cord.top + cord.height + window.scrollY, width: cord.width }}
    >
      <div className="p-5 cursor-pointer">Javascript</div>
      <div className="p-5 cursor-pointer">ReactJS</div>
      <div className="p-5 cursor-pointer">VueJS</div>
    </div>,
    document.querySelector("body")
  );
}
export default DropdownPortal;
