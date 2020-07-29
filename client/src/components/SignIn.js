import React, { Component, Fragment } from "react";
import styled from "styled-components";
import ShowToggle from "./ShowToggle";
import FormBtn from "./FormBtn";
import axios from "axios";
import { Link } from "react-router-dom";
import Ad from './Ad';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false,
      signin: "Sign in",
      buttonText: "Show"
    };
  }

  handleShowToggle = () => {
    const pw_el = document.getElementById("password");
    if (pw_el.type === "password") {
        this.setState({ buttonText: "Hide" });
      pw_el.type = "text";
    } else {
        this.setState({ buttonText: "Show" });
      pw_el.type = "password";
    }
  }

  handleChange = (event) => {
      const value = event.target.value;
      this.setState({
        [event.target.name]: value
      })
  };

  handleSignIn = (event) => {
    event.preventDefault();

    if (this.state.username === "" || this.state.password === "") {
      this.setState({ error: true });
    }

    axios({
      method: "post",
      url: "http://localhost:9000/signin",
      config: { headers: { "Content-Type": "application/json" } },
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  render() {
    return (
    <Fragment>
      <div className="inc__form">
        <h2>Sign In</h2>
        <p className="signin__createAccountNotice">
          New to International Concepts?&nbsp;
          <Link to="/signup">
            <span>Create an account</span>.
          </Link>
        </p>
        <form>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            className={this.state.error === true ? "error" : ""}
          />
          <label>Password</label>
          <div className="input-control">
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handleChange}
              className={this.state.error === true ? "error" : ""}
            />
            <ShowToggle 
                buttonText={this.state.buttonText}
                handleShowToggle={this.handleShowToggle} />
          </div>
          <p>
            <Link to="/signin/password-reset">Forgot password?</Link>
          </p>
          <div className="keep__signedin">
            <input type="checkbox" name="keep_signedin" />
            <p>Keep me signed in. Details </p>
          </div>
          <p>
            By signing in to your account, you agree to our Privacy Policy and
            Terms & Conditions.
          </p>
          <div>
            <FormBtn
              btnText={this.state.signin}
              handleSignIn={this.handleSignIn}
            />
          </div>
        </form>
      </div>
      <Ad />
      </Fragment>
    );
  }
}

export default SignIn;
