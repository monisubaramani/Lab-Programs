import { useState } from "react";
import "./Registration.css";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  function handleForm(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Fill the name");
      return;
    }
    if (!email.trim()) {
      alert("Fill the email");
      return;
    }
    if (!password.trim()) {
      alert("Fill the password");
      return;
    }

    setSubmittedData({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="bg-white px-6 py-12 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Registration Form</h1>

      <form onSubmit={handleForm} className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label className="text-left">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-left">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-left">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="text-left border-l-4 border-green-600 rounded-xl my-4 px-5 py-3">
          <h3 className="font-semibold">Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}
