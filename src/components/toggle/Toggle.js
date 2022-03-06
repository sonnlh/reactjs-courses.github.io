import "./ToggleStyle.css";
const { useState } = require("react");

function Toggle() {
  // enabling state
  // initialize state
  // reading state
  // update state
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn((on) => {
      return !on;
    });
  };
  console.log(on, setOn);
  return (
    <div className={`toggle ${on === true ? "active" : ""}`}>
      <div
        className={`spinner ${on === true ? "active" : ""}`}
        onClick={handleToggle}
      ></div>
    </div>
  );
}

export default Toggle;
