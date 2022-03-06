import React from "react";
// import "./Button.scss";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button className={`button ${props.className}`}>{props.children}</button>
      <button className={styles.button}>{props.children}</button>
    </div>
  );
};

export default Button;
