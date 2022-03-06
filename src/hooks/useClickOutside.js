import { useEffect, useRef, useState } from "react";

export default function useClickOutside(dom) {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    console.log("set show");
    function handleClickOutside(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}