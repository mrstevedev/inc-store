import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class SignInBtn extends Component {
  render() {
    const SignIn = styled.div`
      padding: 0 2rem 0 0;
      @media(max-width: 415px) {
        display: none;
    }
    `;
    return (
      <SignIn>
        <Link to="/signin">
          Sign In          
        </Link>
      </SignIn>
    );
  }
}
export default SignInBtn;
