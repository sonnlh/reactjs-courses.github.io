import React, { useEffect } from "react";
import { createPortal } from "react-dom/cjs/react-dom.development";
import PropTypes from "prop-types";
function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}
const porttalWrapperElm = createPortalWrapper();
const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  onClose = () => {},
  containerStyle = {},
  bodyStyle = {},
  overlay = true,
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(porttalWrapperElm);
  }, []);
  const renderContent = (
    <div className={containerClassName} style={containerStyle}>
      {overlay && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 overlay"
          onClick={onClose}
        ></div>
      )}
      <div className={bodyClassName} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, porttalWrapperElm);
};
Portal.propTypes = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  onClose: PropTypes.func,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node,
  overlay: PropTypes.bool,
};

export default Portal;
