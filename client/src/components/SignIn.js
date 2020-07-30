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
      errorEmail: false,
      errorPassword: false,
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

      if(this.state.email !== '') {
          this.setState({ errorEmail: false });
      }
      if(this.state.password !== '') {
        this.setState({ errorPassword: false });
    }
      this.setState({
        [event.target.name]: value
      })
  };

  handleSignIn = (event) => {
    event.preventDefault();

    if (this.state.email === "" || this.state.errorPassword === "") {
      this.setState({ errorEmail: true, errorPassword: true });
    } 

    axios({
      method: "post",
      url: "http://localhost:5000/signin",
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
        <p className="inc__form--header-notice">
          New to International Concepts?&nbsp;
          <Link to="/signup">
            <span>Create an account</span>.
          </Link>
        </p>
        <form onSubmit={this.handleSignIn.bind(this)}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            className={this.state.errorEmail === true ? "error" : ""}
          />
          {this.state.errorEmail === true ?  <div className="inc__form--error-msg">Email is required</div> : ""}
         
          <label>Password</label>
          <div className="input-control">
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handleChange}
              className={this.state.errorPassword === true ? "error" : ""}
            />
            <ShowToggle 
                buttonText={this.state.buttonText}
                handleShowToggle={this.handleShowToggle} />
          </div>
          {this.state.errorPassword === true ?  <div className="inc__form--error-msg">Password is required</div> : ""}
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
