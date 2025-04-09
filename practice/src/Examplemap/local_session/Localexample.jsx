
import React, { useEffect, useState } from "react";

const LocalStorageForm = () => {
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
      name: localStorage.getItem("name") || "",
      email: localStorage.getItem("email") || "",
      password: localStorage.getItem("password") || "",
      reenterpassword: localStorage.getItem("reenterpassword") || "",
      phonenumber: localStorage.getItem("phonenumber") || "",
      address: localStorage.getItem("address") || ""
    });
  }, []);

  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    Object.keys(user).forEach((key) => {
      localStorage.setItem(key, user[key]);
    });

    alert("Data saved successfully to Local Storage!");
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
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Local Storage Form</h2>
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

        <button type="submit">Save to Local Storage</button>
        <button type="button" onClick={handleClear} style={{ marginLeft: "10px" }}>
          Clear Local Storage
        </button>
      </form>
    </div>
  );
};

export default LocalStorageForm;
