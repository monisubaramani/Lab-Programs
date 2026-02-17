import React, { useState } from "react";


export default function Tabs() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <div>
        <button onClick={() => setActiveTab("home")}>
          Home
        </button>

        <button onClick={() => setActiveTab("about")}>
          About
        </button>

        <button onClick={() => setActiveTab("contact")}>
          Contact
        </button>
      </div>

      <div>
        {activeTab === "home" && <p>Welcome to home page</p>}
        {activeTab === "about" && <p>This is the about page</p>}
        {activeTab === "contact" && (
          <p>Contact us at contact@example.com</p>
        )}
      </div>
    </div>
  );
}
