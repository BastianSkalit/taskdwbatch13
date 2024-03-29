import React, { Component } from "react";
import Login from "./Login";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonClear from "../components/ButtonClear";
import "../App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Content />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div className="App-content-register">
        <h1 style={{ textSize: "10px" }}>Join Medium.</h1>
        <h2 style={{ textSize: "10px" }}>
          Create an account to receive great stories in your inbox, personalize
          your homepage, and follow authors and topics that you love.
        </h2>

        <FormInput />

        <div className="App-text-info">
          <span style={{ textSize: "10px" }}>Already have an account?</span>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <ButtonClear title="Sign in"></ButtonClear>
          </Link>
        </div>

        <div className="App-text-info">
          To make Medium work, we log user data and share it with service
          providers. Click “Sign up” above to accept Medium’s
          <span style={{ textDecoration: "underline" }}>
            Terms of Service
          </span>{" "}
          &<span style={{ textDecoration: "underline" }}>Privacy Policy.</span>
        </div>
      </div>
    );
  }
}

class FormInput extends Component {
  render() {
    return (
      <div className="App-form">
        <div className="App-input-group">
          <div className="input-label">Your username</div>
          <input type="text" />
        </div>

        <div className="App-input-group">
          <div className="input-label">Your email</div>
          <input type="email" />
        </div>

        <div className="App-input-group">
          <div className="input-label">Your password</div>
          <input type="password" />
        </div>

        <ButtonPrimary title="Registration"></ButtonPrimary>
      </div>
    );
  }
}

export default Register;
