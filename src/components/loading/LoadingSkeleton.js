import React from "react";

const LoadingSkeleton = (props) => {
  return (
    <div
      style={{
        height: props.height,
        width: props.width || '100%',
        borderRadius: props.radius,
      }}
      className="skeleton"
    ></div>
  );
};

export default LoadingSkeleton;
