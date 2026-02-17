import React, { useState } from "react";

export function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const number1 = parseFloat(num1) || 0;
  const number2 = parseFloat(num2) || 0;

  const addition = number1 + number2;
  const subtraction = number1 - number2;
  const multiplication = number1 * number2;
  const division = number2 !== 0 
    ? (number1 / number2).toFixed(2) 
    : "Infinity";

  return (
    <div style={styles.container}>
      <h1>Real-Time Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}  
        style={styles.input}
      />

      <div>
        <p>Addition: {addition}</p>
        <p>Subtraction: {subtraction}</p>
        <p>Multiplication: {multiplication}</p>
        <p>Division: {division}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "10px 0",
  },
};
