import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "./Portal";

const TooltipAdvance = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({});
  const handleMouseEnter = (event) => {
    setCoords(event.target.getBoundingClientRect());
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };
  return (
    <div className="relative inline-block ml-5">
      <CSSTransition in={visible} classNames="fade" timeout={300} unmountOnExit>
        {(status) => (
          <Portal overlay={false} visible={status !== "exited"}>
            <p
              style={{
                left: coords.left + coords.width / 2,
                top: coords.top - coords.height - 24 + window.scrollY,
              }}
              className="absolute inline-block p-3 text-white transition-all bg-black tooltip rounded-xl -translate-x-2/4"
            >
              {children}
            </p>
          </Portal>
        )}
      </CSSTransition>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {title}
      </div>
    </div>
  );
};

export default TooltipAdvance;
