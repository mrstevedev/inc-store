import React, { Component, Fragment } from "react";
import styled from "styled-components";
import ShowToggle from "./ShowToggle";
import FormBtn from "./FormBtn";
import axios from "axios";
import { Link } from "react-router-dom";
import { validateEmail } from '../util';
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
      buttonText: "Show",
      formSubmit: false,
      error: "",
      user: {}
    };
  }

  componentDidMount() {
    if(this.props.location.state !== undefined ) {
      console.log('has location.state')
    }
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

    if (this.state.email === "") {
      this.setState({ errorEmail: true });
    }
    
    if (this.state.password === "") {
      this.setState({ errorPassword: true });
    } else {
      axios({
        method: "POST",
        url: "http://localhost:5000/signin",
        data: {
          username: this.state.email,
          password: this.state.password
        },
        withCredentials: true
      }).then((res) => {
          console.log(res);
          if(res.data.message) {
            this.setState({ error: res.data.message });
          }
          this.setState({ formSubmit: true, user: res.data.user });
          if(this.state.user) {
            this.props.history.push('/', { message: 'You are now logged in', user: this.state.user } );
          }
        }).catch((err) => console.log(err));
    }
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
        { this.props.location.state !== undefined ? (
            <div className="inc__form--sucesss-notice-container">
              <p className="inc__form--sucesss-notice-text">{ this.props.location.state.message }</p>
            </div>
        ) : '' }
        <form onSubmit={this.handleSignIn.bind(this)}>
        { this.state.error ? (
                  <div className="inc__form-error">
                   <p>{ this.state.error }</p>
                </div>
                ) : '' }
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            className={this.state.errorEmail === true ? "error" : ""}
          />
          {this.state.errorEmail === true ?  
          <div className="inc__form--error-msg">Email is required</div> : 
              validateEmail(this.state.email) ? 
            <div className="inc__form--success-msg">Email is valid</div> : ''}
         
          <label>Password</label>
          <div className="inc__form-input-control">
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
            <Link to="/signin/password-reset" className="inc__form--link">Forgot password?</Link>
          </p>
          <div className="inc__form-keep-signedin ">
            <input type="checkbox" name="keep_signedin" />
            <p>Keep me signed in. <Link to="#">Details</Link></p>
          </div>
          <p className="inc__form--terms">
            By signing in to your account, you agree to our <Link to="#">Privacy Policy</Link> and {" "}
            <Link to="#">Terms & Conditions.</Link>
          </p>
          <div>
            <FormBtn
              formSubmit={this.state.formSubmit}
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
