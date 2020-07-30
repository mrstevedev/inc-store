import React, { Component } from "react";
import styled from "styled-components";

export default class ShowToggle extends Component {
  render() {
    const ShowToggle = styled.div`
      position: absolute;
      right: 0.6rem;
      font-size: 13px;
      font-weight: bold;
      cursor: pointer;
      background: #fff;
      padding: 0.3rem 1rem;
      border-radius: 3px;

      ::selection {
        background-color: transparent;
        color: #333;
    }
  }
    `;
    return (
      <ShowToggle onClick={this.props.handleShowToggle}>
        {this.props.buttonText}
      </ShowToggle>
    );
  }
}
