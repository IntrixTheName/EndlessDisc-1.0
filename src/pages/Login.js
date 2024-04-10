import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import PropTypes from 'prop-types'
import EndlessDisc_Banner from "../assets/EndlessDisc_Banner";
import "./Login.css";
import { IoArrowForward } from "react-icons/io5";

async function attempt_login(credentials) {
  const response = await fetch(`http://localhost:5000/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    console.log("attempt_login() failed");
    let message = await response.json();
    alert(message.message);
  }
  console.log(response);
  const result = await response.json();
  return result;
}

async function attempt_signup(credentials) {
  const response = await fetch(`http://localhost:5000/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    console.log("signup() failed");
  }
  console.log(response);
  const result = await response.json();
  return result;
}

function Login(setToken) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const submit = async (e) => {
    e.preventDefault();
    let token;
    try {
      if (isLogin) {
        token = await attempt_login({ username, password });
      } else {
        token = await attempt_signup({ username, email, password });
      }
      console.log(token.token);
      setToken.setToken(token.token);
    } catch {
      console.log(`${token} invalid or missing`);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="background">
      <div className="login-box">
        <form onSubmit={submit}>
          {isLogin ? <h1>Endless Disc Login</h1> : <h1>Endless Disc Signup</h1>}
          <input
            className="login-input"
            id="username"
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          {isLogin ? (
            <></>
          ) : (
            <>
              <input
                className="login-input"
                id="email"
                placeholder="E-Mail"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
            </>
          )}
          <input
            className="login-input"
            id="password"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="login-button" type="submit">
            Login
          </button>
          {isLogin ? (
            <button className="login-button" type="button" onClick={toggleForm}>
              But I want to sign up! <IoArrowForward />
            </button>
          ) : (
            <button className="login-button" type="button" onClick={toggleForm}>
              But I want to log in! <IoArrowForward />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
