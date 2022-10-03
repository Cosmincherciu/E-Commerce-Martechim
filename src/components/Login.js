import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Login({ value }) {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-login">
      <div className="login-container">
        <div className="">
          <form onSubmit={handleSubmit}>
            <label for="martechim1">Username</label>
            <input
              placeholder="Enter Your Username..."
              type="text"
              id="martechim1"
            />
            <label for="martechim1">Password</label>
            <input
              placeholder="Enter password"
              type="password"
              id="martechim1"
            />
            <br />
            <button type="submit" id="sub_btn">
              {" "}
              Login
            </button>
          </form>
          <br></br>
          <div className="footer">
            <h4>
              Don't have an account?{" "}
              <Link className="link" to="/Register">
                Register Now
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
