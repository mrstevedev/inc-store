import React, { Component } from "react";
import styled from "styled-components";

export class Hero extends Component {
  render() {
    const Hero = styled.div`
        background: #000;
        height: 330px;
        margin: 3rem 0 5rem 0;
        box-shadow: 0 4px 2px 0 #eaeaea;
        // border-radius: 12px;
    `;
    return (
        <Hero></Hero>
    );
  }
}

export default Hero;
