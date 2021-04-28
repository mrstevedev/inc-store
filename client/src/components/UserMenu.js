import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

class UserMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const UserMenu = styled.div`
            background: #fff;
            position: absolute;
            top: 4.2rem;
            width: 190px;
            max-height: 288px;
            right: -1rem;
            box-shadow: 0px 0px 8px -1px #e2e2e2;
            border-radius: 6px;
            padding: 1rem;
            font-size: 0.8rem;
            text-transform: capitalize;
            flex-direction: column;
            visibility: hidden;

            .inc__userMenu-top {
                border-bottom: solid 1px #f2f2f2;
            }

            li {
                padding: 0.7rem;
                border-radius: 6px;
                font-weight: bold;
                transition: .12s ease-in-out;
                &:hover {
                    background: #f5f5f5;

                }
            }

            &.show {
                visibility: visible;
              }
        `;

        const UserMenuList = styled.ul`
            list-style: none;
            padding: 0;
        `;

        return (
            <UserMenu className={ `inc__userMenu  ${ this.props.openUserMenu === true ? 'show' : '' }` }>
               <div className="inc__userMenu-top" style={{ padding: '1rem 0.5rem 10px' }}>
                <p style={{ textTransform: 'uppercase', fontSize: '0.66rem', color: '#929292' }}>eckosneekz</p>
                <p style={{ textTransform: 'lowercase', color: '#000', fontWeight: 'bold' }}>stevendotpulido@gmail.com</p>
               </div>
               <div className="inc__userMenu-btm">
                    <UserMenuList>
                        <Link onClick={this.props.handleCloseMenu} to={{
                            pathname: '/myaccount'
                        }}><li>My Account</li></Link>
                        <Link onClick={this.props.handleCloseMenu} to={{
                            pathname: '/wishlist'
                        }}><li>Wishlist</li></Link>
                        <Link onClick={this.props.handleCloseMenu} to={{
                            pathname: '/signin'
                        }}><li>Sign In</li></Link>
                        <Link onClick={this.props.handleCloseMenu} to="/signup"><li>Create Account</li></Link>
                        <Link onClick={this.props.handleCloseMenu} to={{
                            pathname: '/help'
                        }}><li>Help</li></Link>
                        <Link onClick={this.props.handleCloseMenu} to="/logout" style={{ color: '#ff5757' }}><li>Sign Out</li></Link>
                    </UserMenuList>
               </div>
            </UserMenu>
        )
    }
}

export default UserMenu;