import React, { useEffect, useRef } from "react";

const Input = () => {
  const divRef = useRef();
  const inputRef = useRef();
  
  useEffect(() => {
    console.log(divRef.current);
    if(divRef.current) divRef.current.style.backgroundColor = "red";
  }, []);

  return (
    <div>
      <div className="input-div" ref={divRef}></div>
    </div>
  );
};

export default Input;
