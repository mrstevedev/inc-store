import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Navigation from './Navigation';
import NavigationRight from './NavigationRight';
import { Link } from "react-router-dom";
import MobileMenuToggler from './MobileMenuToggler';
import MobileMenu from './MobileMenu';

class Header extends Component {

  handleMenuOpen = () => {
    console.log('show mobile side menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show');

    
  }

  render() { 
    const Header = styled.header`
      height: 30px;
      padding: 2.1rem 0;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    `;
    return (
      <Fragment>
        <Header>
            <MobileMenuToggler
              handleMenuOpen={this.handleMenuOpen}
            />
            <h1><Link to="/">INC | International Concepts</Link></h1>
            <Navigation />
            <NavigationRight />            
        </Header>
      </Fragment>
    );
  }
}
export default Header;
