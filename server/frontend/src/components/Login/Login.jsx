import React, { useState } from "react";

const LoginPanel = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const res = await fetch(window.location.origin + "/djangoapp/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password }),
    });
    const json = await res.json();
    if (json.status === "Authenticated") {
      sessionStorage.setItem("username", json.userName);
      window.location.href = window.location.origin;
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <div style={{ width: "400px", padding: "40px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Login</h2>
        <form onSubmit={login}>
          <div style={{ marginBottom: "15px" }}>
            <input type="text" placeholder="Username" style={{ width: "100%", padding: "10px" }}
              onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input type="password" placeholder="Password" style={{ width: "100%", padding: "10px" }}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <input type="submit" value="Login" style={{ width: "100%", padding: "10px", backgroundColor: "darkturquoise", border: "none", cursor: "pointer" }} />
        </form>
        <p style={{ marginTop: "15px" }}>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
};

export default LoginPanel;
