import React from "react";
import { useState } from "react";

function SumCalculator() {
  const [inputValues, setInputValues] = useState({ num1: 0, num2: 0, num3: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const sum =
    Number(inputValues.num1) +
    Number(inputValues.num2) +
    Number(inputValues.num3);

  return (
    <div className="sum-calculator">
      <input
        type="number"
        name="num1"
        value={inputValues.num1}
        onChange={handleInputChange}
      />
      <span> + </span>
      <input
        type="number"
        name="num2"
        value={inputValues.num2}
        onChange={handleInputChange}
      />
      <span> + </span>
      <input
        type="number"
        name="num3"
        value={inputValues.num3}
        onChange={handleInputChange}
      />
      <span>=</span>
      <p>{sum}</p>
    </div>
  );
}

export default SumCalculator;
