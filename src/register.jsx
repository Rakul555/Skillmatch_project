import React, { useState } from "react";
import "./styles/register.css";
import { Link } from "react-router-dom";

function Register() {
  let [user, setUser] = useState({});
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [newPass, setNewPass] = useState(null);

  function verify() {
    if (password === newPass) {
      setUser({ username: name, email: email, password: password });
      console.log(user);
    } else {
      alert("Please check confirm Password");
    }
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <div className="login-card">
        <h1 style={{ color: "whitesmoke" }}>SkillMatch</h1>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <label>Confirm Password</label>
        <input type="password" onChange={(e) => setNewPass(e.target.value)} />
        <button className="button-17" onClick={verify}>
          REGISTER
        </button>
        <Link to="/login" className="link-style">
          <span>Already have account</span>
        </Link>
      </div>
    </>
  );
}

export default Register;
