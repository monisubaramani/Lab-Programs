import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("gray");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Color Picker</h2>

      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          margin: "20px auto",
          borderRadius: "10px",
        }}
      ></div>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")} style={{ marginLeft: "10px" }}>
        Blue
      </button>
      <button onClick={() => setColor("green")} style={{ marginLeft: "10px" }}>
        Green
      </button>
    </div>
  );
}
