import React from "react";

function Operators(props) {
  return (
    <>
      <button
        onClick={(e) => props.handleOperator(e.target.value)}
        className="input-button"
        value="+"
      >
        +
      </button>
      <button
        onClick={(e) => props.handleOperator(e.target.value)}
        className="input-button"
        value="-"
      >
        -
      </button>
      <button
        onClick={(e) => props.handleOperator(e.target.value)}
        className="input-button"
        value="/"
      >
        /
      </button>
      <button
        onClick={(e) => props.handleOperator(e.target.value)}
        className="input-button"
        value="*"
      >
        *
      </button>
      <button
        onClick={(e) => props.handleOperator(e.target.value)}
        className="input-button"
        value=""
      >
        c
      </button>
      <button
        onClick={(e) => props.handleEvaluate(e.target.value)}
        className="input-button"
        value="="
      >
        =
      </button>
    </>
  );
}

export default Operators;
