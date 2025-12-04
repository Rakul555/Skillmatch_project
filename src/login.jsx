import React from "react";
import "./styles/login.css";
import { Link } from "react-router-dom";

function Login() {
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
        <label>Email</label>
        <input type="email" placeholder="Enter Mail" />
        <label>Password</label>
        <input type="password" />
        <button className="button-17">LOGIN</button>
        <Link to="/register" className="link-style">
          <span>Don't have an account?</span>
        </Link>
      </div>
    </>
  );
}

export default Login;
