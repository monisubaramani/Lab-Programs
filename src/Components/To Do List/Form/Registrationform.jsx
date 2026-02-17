import React, { useState } from 'react';
import './Registration.css';

export default function Registrationform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  function handleForm() {
    if (!name.trim()) { alert("Fill the name"); return; }
    if (!email.trim()) { alert("Fill the email"); return; }
    if (!password.trim()) { alert("Fill the password"); return; }

    setSubmittedData({ name, email, password });
    setName(""); setEmail(""); setPassword("");
  }

  return (
    <div className='bg-white px-6 py-12'>
      <h2>Registration Form</h2>

      <div className='flex flex-col'> 
        <label>Name</label>
        <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div className='flex flex-col'>
        <label>Email</label>
        <input type="text" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div className='flex flex-col'>
        <label>Password</label>
        <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>

      <button onClick={handleForm}>Submit</button>

      {submittedData && (
        <div className='text-left my-3 px-5 py-2 bg-green-500 text-white'>
          <h3>Submitted data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}
