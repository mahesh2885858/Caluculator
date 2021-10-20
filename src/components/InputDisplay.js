import React from "react";

function InputDisplay(props) {
  return <div className="input-display">{props.text1 + props.operator+ props.text2}</div>;
}

export default InputDisplay;
