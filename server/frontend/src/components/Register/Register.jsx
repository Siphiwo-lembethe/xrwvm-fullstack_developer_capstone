import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const gohome = () => {
    window.location.href = window.location.origin;
  }

  const register = async (e) => {
    e.preventDefault();
    let register_url = window.location.origin + "/djangoapp/register";
    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "userName": userName,
        "password": password,
        "firstName": firstName,
        "lastName": lastName,
        "email": email
      }),
    });
    const json = await res.json();
    if (json.status) {
      sessionStorage.setItem('username', json.userName);
      window.location.href = window.location.origin;
    } else if (json.error === "Already Registered") {
      alert("The user with same username is already registered");
      window.location.href = window.location.origin;
    }
  };

  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
      <div style={{width: "400px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px"}}>
        <h2>Sign Up</h2>
        <form onSubmit={register}>
          <div style={{marginBottom: "10px"}}>
            <input type="text" placeholder="Username" style={{width: "100%", padding: "8px"}} onChange={(e) => setUserName(e.target.value)} required />
          </div>
          <div style={{marginBottom: "10px"}}>
            <input type="text" placeholder="First Name" style={{width: "100%", padding: "8px"}} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div style={{marginBottom: "10px"}}>
            <input type="text" placeholder="Last Name" style={{width: "100%", padding: "8px"}} onChange={(e) => setlastName(e.target.value)} required />
          </div>
          <div style={{marginBottom: "10px"}}>
            <input type="email" placeholder="Email" style={{width: "100%", padding: "8px"}} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div style={{marginBottom: "10px"}}>
            <input type="password" placeholder="Password" style={{width: "100%", padding: "8px"}} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" style={{width: "100%", padding: "10px", backgroundColor: "darkturquoise", color: "white", border: "none", borderRadius: "4px", cursor: "pointer"}}>Register</button>
        </form>
        <p style={{marginTop: "10px"}}><a href="/" onClick={gohome}>Back to Home</a></p>
      </div>
    </div>
  );
}

export default Register;
