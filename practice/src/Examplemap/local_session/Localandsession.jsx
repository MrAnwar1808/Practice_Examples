
import React, { useEffect, useState } from "react";
import './Localandsession.css'

function LocalandSession() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reenterpassword: "",
    phonenumber: "",
    address: ""
  });

  
  useEffect(() => {
    setUser({
      name: localStorage.getItem("name") || sessionStorage.getItem("name") || "",
      email: localStorage.getItem("email") || sessionStorage.getItem("email") || "",
      password: localStorage.getItem("password") || sessionStorage.getItem("password") || "",
      reenterpassword: localStorage.getItem("reenterpassword") || sessionStorage.getItem("reenterpassword") || "",
      phonenumber: localStorage.getItem("phonenumber") || sessionStorage.getItem("phonenumber") || "",
      address: localStorage.getItem("address") || sessionStorage.getItem("address") || ""
    });
  }, []);

  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    Object.keys(user).forEach((key) => {
      localStorage.setItem(key, user[key]);
      sessionStorage.setItem(key, user[key]);
    });

    alert("Data saved successfully to Local and Session Storage!");
  };

  
  const handleClear = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      reenterpassword: "",
      phonenumber: "",
      address: ""
    });

    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>User Details Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={user.password} onChange={handleChange} required />

        <label>Re-enter Password:</label>
        <input type="password" name="reenterpassword" value={user.reenterpassword} onChange={handleChange} required />

        <label>Phone Number:</label>
        <input type="tel" name="phonenumber" value={user.phonenumber} onChange={handleChange} required />

        <label>Address:</label>
        <input type="text" name="address" value={user.address} onChange={handleChange} required />

        <button type="submit">Save Data</button>
        <button type="button" onClick={handleClear} style={{ marginLeft: "10px" }}>
          Clear Data
        </button>
      </form>
    </div>
  );
}

export default LocalandSession
