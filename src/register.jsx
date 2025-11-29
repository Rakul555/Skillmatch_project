import React from "react";
import "./register.css";

function register() {
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
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <label>Confirm Password</label>
        <input type="password" />
        <button className="button-17">REGISTER</button>
      </div>
    </>
  );
}

export default register;
