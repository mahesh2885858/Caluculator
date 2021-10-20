import React from "react";

function Inputs(props) {
  return (
    <>
      <button
        onClick={(e) => props.onClick(e.target.name)}
        name="7"
        className="input-number"
      >
        7
      </button>
      <button
        onClick={(e) => props.onClick(e.target.name)}
        name="8"
        className="input-number"
      >
        8
      </button>
      <button
        onClick={(e) => props.onClick(e.target.name)}
        name="9"
        className="input-number"
      >
        9
      </button>
      <button
        onClick={(e) => props.onClick(e.target.name)}
        name="4"
        className="input-number"
      >
        4
      </button>
      <button
        onClick={(e) => props.onClick(e.target.name)}
        name="5"
        className="input-number"
      >
        5
      </button>
      <button
        onClick={(e) => props.onClick(e.target.name)}
        name="6"
        className="input-number"
      >
        6
      </button>
      <button
        onClick={(e) => props.onClick(e.target.name)}
        name="1"
        className="input-number"
      >
        1
      </button>
      <button
        onClick={(e) => props.onClick(e.target.name)}
        name="2"
        className="input-number"
      >
        2
      </button>
      <button
        onClick={(e) => props.onClick(e.target.name)}
        name="3"
        className="input-number"
      >
        3
      </button>
      <button
        onClick={(e) => props.onClick(e.target.name)}
        name="0"
        className="input-number"
      >
        0
      </button>
      <button
        onClick={(e) => props.dotHandler(e.target.name)}
        name="."
        className="input-number"
      >
        .
      </button>
    </>
  );
}

export default Inputs;
