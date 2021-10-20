import React, { useState } from "react";
import InputDisplay from "./components/InputDisplay";
import Inputs from "./components/Inputs";
import Operators from "./components/Operators";
import OutputDisplay from "./components/OutputDisplay";
function Caluculator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [operator, setOperator] = useState("");
  const [output, setOutput] = useState("");
  const handleButton = (x) => {
    if (operator === "") {
      setInput1((olditem) => {
        return olditem + x;
      });
    } else {
      {
        setInput2((olditem) => {
          return olditem + x;
        });
      }
    }
  };
  const dotHandler = (x) => {
    if (operator === "") {
      if (input1.includes(".")) {
        return;
      } else {
        setInput1((olditem) => {
          return olditem + x;
        });
      }
    } else {
      if (input2.includes(".")) {
        return;
      } else {
        setInput2((olditem) => {
          return olditem + x;
        });
      }
    }
  };
  const handleOperator = (x) => {
    // console.log(x);

    if (x === "" || input1 === "") {
      setInput1("");
      setInput2("");
      setOperator("");
      setOutput("");
    } else {
      if (input1 && input2 && operator) {
        setInput2("");
        setOperator("");
        switch (operator) {
          case "+":
            setInput1(parseFloat(input1) + parseFloat(input2));
            setOperator(x);
            break;
          case "-":
            setInput1(parseFloat(input1) - parseFloat(input2));
            setOperator(x);
            break;
          case "*":
            setInput1(parseFloat(input1) * parseFloat(input2));
            setOperator(x);
            break;
          case "/":
            setInput1(parseFloat(input1) / parseFloat(input2));
            setOperator(x);
            break;
        }
      } else {
        setOperator(x);
      }
    }
  };

  const handleEvaluate = () => {
    if (input1 && input2 && operator) {
      switch (operator) {
        case "+":
          setOutput(parseFloat(input1) + parseFloat(input2));
          break;
        case "-":
          setOutput(parseFloat(input1) - parseFloat(input2));
          break;
        case "*":
          setOutput(parseFloat(input1) * parseFloat(input2));
          break;
        case "/":
          setOutput(parseFloat(input1) / parseFloat(input2));
          break;
      }
    } else {
      setOutput(input1);
    }
  };
  return (
    <>
      <div className="display-container">
        <InputDisplay text2={input2} text1={input1} operator={operator} />
        <OutputDisplay result={output} />
      </div>
      <div className="input-container">
        <Inputs onClick={handleButton} dotHandler={dotHandler} />
        <Operators
          handleOperator={handleOperator}
          handleEvaluate={handleEvaluate}
        />
      </div>
    </>
  );
}
export default Caluculator;
