import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-register">
      <div className="register-container">
        <div className=""></div>
        <form onSubmit={handleSubmit}>
          <label for="martechim">Username</label>
          <input
            for="martechim"
            placeholder="Enter Your Username"
            type="text"
            id="martechim"
          />
          <label for="martechim1"> Email</label>
          <input
            placeholder="Enter Your Email adress"
            type="email"
            id="martechim1"
          />
          <label for="martechim1">Password</label>
          <input
            placeholder="Enter a Password"
            type="password"
            id="martechim1"
          />
          <br></br>
          <button type="submit" id="sub_btn">
            {""}
            Register
          </button>
        </form>
        <div className="footer">
          Already have an account?{" "}
          <Link className="link" to="/Login">
            {" "}
            Login into your Account{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
