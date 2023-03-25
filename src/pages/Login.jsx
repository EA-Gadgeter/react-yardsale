import React from "react";

import "@styles/Login.scss";

import logo from "@logos/logo_yard_sale.svg"

const Login = () => {
  return (
    <div className="Login">
        <div className="login-container">
            <img src={logo} alt="logo" className="logo" />
            <form className="form">
                <label className="label">Email Address</label>
                <input type="email" id="login" placeholder="example@gmail.com" className="input input-email" />
                <label className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input" />
                <input type="submit" value="Log in" className="login-button" />
                <a href="#">Forgot my password</a>
            </form>
            <button className="primary-button">Sign up</button>
        </div>
    </div>
  );
};

export default Login;