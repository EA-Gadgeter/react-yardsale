import React from "react";

import "../styles/RecoveryPassword.scss";

const RecoveryPassword = () => {
  return (
    <div className="content">
        <div className="advise-container">
            <img src="../logos/logo_yard_sale.svg" alt="logo" className="logo" />
            <h1 className="title">Email has been sent!</h1>
            <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
            <div className="email-icon">
                <img src="../icons/email.svg" alt="email-icon" />
            </div>
            <button className="primary-button login-button">Login</button>
            <footer>
                <span>Didn't receive the email?</span>
                <a href="/">Resend</a>
            </footer>
        </div>
    </div>
  )
}

export default RecoveryPassword;