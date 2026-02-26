import React, { useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const res = await fetch(window.location.origin + "/djangoapp/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password, firstName, lastName, email }),
    });
    const json = await res.json();
    if (json.status === "Authenticated") {
      sessionStorage.setItem("username", json.userName);
      window.location.href = window.location.origin;
    } else if (json.error === "Already Registered") {
      alert("User already registered");
      window.location.href = window.location.origin;
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
      <div style={{ width: "400px", padding: "40px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Sign Up</h2>
        <form onSubmit={register}>
          <div style={{ marginBottom: "12px" }}>
            <input type="text" placeholder="Username" style={{ width: "100%", padding: "10px" }}
              onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <input type="text" placeholder="First Name" style={{ width: "100%", padding: "10px" }}
              onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <input type="text" placeholder="Last Name" style={{ width: "100%", padding: "10px" }}
              onChange={(e) => setlastName(e.target.value)} />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <input type="email" placeholder="Email" style={{ width: "100%", padding: "10px" }}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <input type="password" placeholder="Password" style={{ width: "100%", padding: "10px" }}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <input type="submit" value="Register" style={{ width: "100%", padding: "10px", backgroundColor: "darkturquoise", border: "none", cursor: "pointer" }} />
        </form>
        <p style={{ marginTop: "15px" }}>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
