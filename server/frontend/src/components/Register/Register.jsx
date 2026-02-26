import React, { useState } from "react";
<<<<<<< Updated upstream
import "./Register.css";
=======
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password, firstName, lastName, email }),
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
    <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
      <div style={{ width: "400px", padding: "40px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Sign Up</h2>
        <form onSubmit={register}>
          {[
            { ph: "Username", fn: setUserName },
            { ph: "First Name", fn: setFirstName },
            { ph: "Last Name", fn: setlastName },
            { ph: "Email", fn: setEmail, type: "email" },
            { ph: "Password", fn: setPassword, type: "password" },
          ].map(({ ph, fn, type = "text" }) => (
            <div key={ph} style={{ marginBottom: "12px" }}>
              <input type={type} placeholder={ph} style={{ width: "100%", padding: "10px" }}
                onChange={(e) => fn(e.target.value)} />
            </div>
          ))}
          <input type="submit" value="Register" style={{ width: "100%", padding: "10px", backgroundColor: "darkturquoise", border: "none", cursor: "pointer" }} />
        </form>
        <p style={{ marginTop: "15px" }}>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};
>>>>>>> Stashed changes

export default Register;
