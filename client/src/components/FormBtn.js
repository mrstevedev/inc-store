import React, { PureComponent } from "react";
import styled from "styled-components";
import { SpinnerCircularFixed } from "spinners-react";

export default class FormBtn extends PureComponent {
  render() {
    const Button = styled.button`
      background: #000;
      padding: 0.5rem 2rem;
      color: #fff;
      width: 100%;
      height: 40px;
      border: solid 1px #000;
      margin: 1rem 0;
      cursor: pointer;
      outline: none;
      // border-radius: 3px;
      transition: 0.12s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background: #fff;
        border: solid 1px #000;
        color: #000;
      }
      &:active,
      &:focus {
        background: #000;
        border: solid 1px #000;
        color: #fff;
      }
    `;
    return (
      <Button onClick={this.props.handleSignIn}>
        {this.props.formSubmit === true ? (
            <SpinnerCircularFixed
            size={22}
            thickness={100}
            speed={100}
            color="rgba(57, 156, 172, 1)"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        ) : "" }
        <span className="inc__form-btn--text">{this.props.btnText}</span>
      </Button>
    );
  }
}
