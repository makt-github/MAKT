import React from "react";
import "./Login.css";
import jQuery from "jquery";
import { useState } from "react";
import Axios from "axios";

const Login = () => {
  // Registration
  const [userNameReg, setUserNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passReg, setPassReg] = useState("");

  const signup = () => {
    Axios.post("http://localhost:3001/signup", {
      username: userNameReg,
      email: emailReg,
      password: passReg,
    }).then((res) => {
      console.log(res);
    });
  };

  //Login

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: pass,
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <section className="account">
        <div class="container" id="container">
          <div class="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div class="social-container">
                <a href="#" class="social">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setUserNameReg(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmailReg(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassReg(e.target.value);
                }}
              />
              <button onClick={signup}>Sign Up</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div class="social-container">
                <a href="#" class="social">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
              <a href="#">Forgot your password?</a>
              <button onClick={login}>Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Hit the Button soon!</h1>
                <p>
                  It's a high time ,Hit-Up quickly...Great things are waiting!
                </p>
                <button class="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Not Register Yet?🤭</h1>
                <p>Ouuf! Done quickly</p>
                <button class="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

jQuery(document).ready(function () {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  if (signUpButton) {
    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });
  }
  if (signInButton) {
    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }
});

export default Login;
