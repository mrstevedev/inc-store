import React, { Component, PureComponent, Fragment } from "react";
import ShowToggle from "./ShowToggle";
import FormBtn from "./FormBtn";
import axios from "axios";
import Ad from './Ad';

import { Link } from "react-router-dom";

export class SignUp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      signup: "Create account",
      buttonText: "Show",
    };
  }

  onChangeHandler = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  handleRegisterUser(event) {
    event.preventDefault();

    axios({
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:9000/api/users",
      data: this.state,
    })
      .then((res) => console.log("res::::::::", res.data))
      .catch((err) => console.log(err));
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

  createHashPass(event) {
    console.log("createHashPass");
  }

  render() {
    return (
    <Fragment>
      <div className="inc__form">
        <h2>Create Account</h2>
        <p>
          Already have an account? <Link to="/signin">Sign in.</Link>
        </p>
        <form onSubmit={this.handleRegisterUser.bind(this)}>
          <span className="inc__required">*</span>Required
          <div>
            <label>
              First name<span className="inc__required">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label>
              Last name<span className="inc__required">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.onChangeHandler}
            />
          </div>
          <label>
            Email<span className="inc__required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.onChangeHandler}
          />
          <label>
            Create password<span className="inc__required">*</span>
          </label>
          <div className="input-control">
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.onChangeHandler}
              onFocus={this.createHashPass}
            />
            <ShowToggle
              buttonText={this.state.buttonText}
              handleShowToggle={this.handleShowToggle}
            />
          </div>
          <p className="inc__form--terms">
            By creating an account, you agree to our Privacy Policy and Terms &
            Conditions.
          </p>
          <div>
            <FormBtn
              btnText={this.state.signup}
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

export default SignUp;
