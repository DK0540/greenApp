// src/components/Login.js

import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import the CSS file
import img from "./assets/vlogo.png";

const Login = () => {
  return (
    <div className="login-container">
      <img src={img} alt="Logo" className="logo" />

      <h6 style={{ fontSize: "20px", fontWeight: "200", color: "green" }}>
        Vedanta Irrigation System Pvt Ltd
      </h6>
      <div className="input-container">
        <input placeholder="Email" type="email" className="input-field" />
      </div>
      <div className="input-container">
        <input
          placeholder="Password:"
          type="password"
          className="input-field"
        />
      </div>

      <button className="login-button">
        <Link to="/employeeProductiveDashboard" className="button-link">
          Login
        </Link>
      </button>

      <Link to="/forgotPassword" className="forgot-password-link">
        Forgot Password?
      </Link>
    </div>
  );
};

export default Login;
