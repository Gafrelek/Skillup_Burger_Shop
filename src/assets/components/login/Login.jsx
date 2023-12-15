import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    console.log("Signing in...", email, password, rememberMe);
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="social-container">
          <p>Sign in with:</p>
          <div className="social-icons">
            <button className="social-icon-button">
              <MDBIcon fab icon="facebook-f" size="lg" />
            </button>
            <button className="social-icon-button">
              <MDBIcon fab icon="twitter" size="lg" />
            </button>
            <button className="social-icon-button">
              <MDBIcon fab icon="google" size="lg" />
            </button>
            <button className="social-icon-button">
              <MDBIcon fab icon="github" size="lg" />
            </button>
          </div>
          <p className="or-text">or:</p>
        </div>
        <input
          className="form-input"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="remember-me-container">
          <input
            type="checkbox"
            id="flexCheckDefault"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="flexCheckDefault">Remember me</label>
          <a href="#!" className="forgot-password-link">
            Forgot password?
          </a>
        </div>
        <button className="sign-in-button" onClick={handleSignIn}>
          Sign in
        </button>
        <p className="not-member-text">
          Not a member?{" "}
          <a href="#!" className="register-link">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
