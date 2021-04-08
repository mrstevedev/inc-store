import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export class MobileMenu extends Component {


    handleShowSignInPage(event) {
        console.log('show signin page');
        const mobileMenu = document.querySelector('.mobile-menu');

        mobileMenu.classList.toggle('show');

        // add checked to input
        const MobileToggle = document.querySelector('.menu-icon__checkbox').checked = false;
        
    }

  render() {
    const MobileMenu = styled.div`
    @media(max-width: 465px) {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        left: -400px;
        top: 5.6rem;
        margin: -50px 0 0 0;
        padding-top: 125px;
        background-color: #fff;
        z-index: 1;
        -webkit-transition: 400ms ease;
        transition: 400ms ease;
    }`;

    const SignInContainer = styled.div`
        margin: 3rem 0;
    `;

    const AccountList = styled.ul`
        list-style: none;
        padding: 0;
        li {
            a {
                text-transform: uppercase;
                font-weight: bold;
                // color: #008cfb;

                // &:after {
                //     content: "";
                //     display: block;
                //     border: solid 1px;
                //     width: 28px;
                //     margin: 3px 0;
                // }
            }
        }
    `;

    return (
      <Fragment>
        <MobileMenu className="mobile-menu">            
            <ul id="menu">
                <li><a href="#">Sale</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Beauty</a></li>
                <li><a href="#">Brands</a></li>

                <SignInContainer>
                    <AccountList>
                        <li><Link to="/dashboard">Eckosneekz</Link> | <Link className="inc__signin-link" to="/signin" onClick={this.handleShowSignInPage}>Sign In</Link></li>
                    </AccountList>
                </SignInContainer>
            </ul>
            
        </MobileMenu>
      </Fragment>
    );
  }
}

export default MobileMenu;
