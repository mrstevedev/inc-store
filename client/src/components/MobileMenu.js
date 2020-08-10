import React, { Component, Fragment } from "react";
import styled from "styled-components";

export class MobileMenu extends Component {
  render() {
    const MobileMenu = styled.div`
    display: none;
    @media(max-width: 415px) {
      background: transparent;
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      left: 0;
      top: 5.6rem;

      margin: -50px 0 0 0;
      padding-top: 125px;
      background-color: #F5F6FA;
      -webkit-font-smoothing: antialiased;
      transform-origin: 0% 0%;
      transform: translate(0%, 0);
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }
       
    `;
    const SlideMenu = styled.div`
    //   height: 100%;
    //   background: #fff;
    //   width: 80%;
    `;
    return (
      <Fragment>
        <MobileMenu className="mobile-menu">
          <SlideMenu>
            <ul id="menu">
                <li><a href="#">Sale</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Beauty</a></li>
                <li><a href="#">Brands</a></li>
            </ul>
          </SlideMenu>
        </MobileMenu>
      </Fragment>
    );
  }
}

export default MobileMenu;
