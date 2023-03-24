import React from "react";

import "../styles/Login.scss";

const Login = () => {
  return (
    <div className="Login">
        <div className="login-container">
            <img src="../logos/logo_yard_sale.svg" alt="logo" className="logo" />
            <form className="form">
                <label for="login" className="label">Email Address</label>
                <input type="email" id="login" placeholder="example@gmail.com" className="input input-email" />
                <label for="password" className="label">Password</label>
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