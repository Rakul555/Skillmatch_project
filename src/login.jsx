import React from "react";
import "./login.css";

function login() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <div className="login-card">
        <h1 style={{ color: "whitesmoke" }}>SkillMatch</h1>
        <label>Email</label>
        <input type="email" placeholder="Enter Mail" />
        <label>Password</label>
        <input type="password" />
        <button className="button-17">LOGIN</button>
      </div>
    </>
  );
}

export default login;
