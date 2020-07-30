import React, { Component, Fragment } from "react";
import ShowToggle from "./ShowToggle";
import FormBtn from "./FormBtn";
import axios from "axios";
import Ad from "./Ad";

import { Link } from "react-router-dom";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      signup: "Create account",
      buttonText: "Show",
      errorFirstName: false,
      errorLastName: false,
      errorEmail: false,
      errorPassword: false,
      formSubmit: false,
      success: false,
    };
  }

  onChangeHandler = (event) => {

    if(this.state.firstName !== '') {
        this.setState({ errorFirstName: false });
    }

    if(this.state.lastName !== '') {
      this.setState({ errorLastName: false });
    }

    if(this.state.email !== '') {
        this.setState({ errorEmail: false });
    }

    if(this.state.password !== '') {
        this.setState({ errorPassword: false });
    }

    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  handleSignUp(event) {
    event.preventDefault();

    if (this.state.firstName === "" ||
      this.state.lastName === ""  ||
      this.state.email === ""     ||
      this.state.password === "" ) {
      this.setState({ errorFirstName: true, errorLastName: true, errorEmail: true, errorPassword: true });
    }

    axios({
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:5000/api/users",
      data: this.state,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          this.setState({ success: "true", formSubmit: true });
          this.props.history.push('/signin');
        } else {
          this.setState({ success: false });
        }
      })
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
  };

  render() {
    return (
      <Fragment>
        <div className="inc__form">
          <h2>Create Account</h2>
          {this.state.success === false ? (
            <Fragment>
              <p className="inc__form--header-notice">
                Already have an account?{" "}
                <Link to="/signin">
                  <span>Sign in</span>.
                </Link>
              </p>
              <form onSubmit={this.handleSignUp.bind(this)}>
                <div>
                  <span className="inc__required">*</span>
                  <span>Required</span>
                </div>
                <div>
                  <label>
                    First name
                    <span className="inc__required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChangeHandler}
                    className={this.state.errorFirstName === true ? 'error' : ''}
                  />
                </div>
                {this.state.errorFirstName === true ? (
                  <div className="inc__form--error-msg">
                    First name is required
                  </div>
                ) : (
                  ""
                )}
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
                    className={this.state.errorLastName === true ? 'error' : ''}
                  />
                </div>
                {this.state.errorLastName === true ? (
                  <div className="inc__form--error-msg">
                    Last name is required
                  </div>
                ) : (
                  ""
                )}
                <label>
                  Email<span className="inc__required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeHandler}
                  className={this.state.errorEmail === true ? 'error' : ''}
                />
                {this.state.errorEmail === true ? (
                  <div className="inc__form--error-msg">Email is required</div>
                ) : (
                  ""
                )}
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
                    className={this.state.errorPassword === true ? "error" : ""}
                  />
                  <ShowToggle
                    buttonText={this.state.buttonText}
                    handleShowToggle={this.handleShowToggle}
                  />
                </div>
                {this.state.errorPassword === true ? (
                  <div className="inc__form--error-msg">
                    Password is required
                  </div>
                ) : (
                  ""
                )}
                <p className="inc__form--terms">
                  By creating an account, you agree to our Privacy Policy and
                  Terms & Conditions.
                </p>
                <div>
                  <FormBtn
                    formSubmit={this.state.formSubmit}
                    btnText={this.state.signup} />
                </div>
              </form>
            </Fragment>
          ) : (
            <div>
              <h2>Your account was created successfully</h2>
              <p className="inc__form--header-notice">
                You can sign in now{" "}
                <Link to="/signin">
                  <span>Sign in</span>.
                </Link>
              </p>
            </div>
          )}
        </div>
        <Ad />
      </Fragment>
    );
  }
}

export default SignUp;
