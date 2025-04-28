import React, { useEffect, useState } from "react";
import "./Calculator.css";
import BackToHome from "../../components/BackToHome/BackToHome";

const Calculator = () => {
  const [input, setInput] = useState("");

  const calcBtns = [
    "C",
    "**",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "del",
    "=",
  ];

  const ops = ["/", "*", "+", "-", "**", "%"];

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [input]);

  const handleClear = () => {
    setInput("");
  };

  const handleEvaluate = () => {
    // for handling entering only "="
    if (input.trim() == "" || ops.includes(input.slice(-1))) return;

    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleBtnClicked = (val) => {
    if (val === "C") {
      handleClear();
    } else if (val === "=") {
      handleEvaluate();
    } else if (val === "del") {
      // Remove last character
      setInput((prev) => prev.slice(0, -1));
    } else {
      // should not start with operands "-" is allowed
      if (
        (ops.includes(val) && input === "" && val !== "-") ||
        (ops.includes(val) && ops.includes(input.slice(-1)))
      )
        return;

      // for checking now two "." together
      const lastNumber = input.match(/(\d+\.?\d*)$/);
      if (val === "." && lastNumber && lastNumber[0].includes(".")) {
        return;
      }

      setInput((prev) => prev + val);
    }
  };

  const handleKeyPress = (event) => {
    const key = event.key;

    if (key === "Backspace") handleBtnClicked("del");
    else if (key === "Enter") handleBtnClicked("=");
    else if (key === "C") handleBtnClicked("C");
    else if (ops.includes(key)) handleBtnClicked(key);
    else if (!isNaN(key) || key === ".") handleBtnClicked(key);
  };

  return (
    <>
      <div className="calculator-project">
        <h2>Calculator</h2>
        <div className="calculator">
          <div className="calc-display-container">
            <div className="display-screen">{input || 0}</div>
          </div>
          <div className="calc-btns">
            {calcBtns.map((btn) => {
              let classBtn = "";
              if (btn === "C") classBtn = "clear";
              else if (btn === "=") classBtn = "equals";
              else if (ops.includes(btn)) classBtn = "operands";
              else classBtn = "numbers";

              return (
                <button
                  key={btn}
                  className={classBtn}
                  onClick={() => handleBtnClicked(btn)}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
        <BackToHome bgColor="#0A5EB0" />
      </div>
    </>
  );
};

export default Calculator;
