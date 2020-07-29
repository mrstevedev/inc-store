import React, { Component, Fragment } from 'react'
import styled from 'styled-components';

export class MobileMenu extends Component {
   
    render() {
        const MobileMenu = styled.div`
            background: #fff;
            position: absolute;
            z-index: 2;
            width: 80%;
            height: 100%;
            left: 0;
            top: 0;
        `
        return (
            <Fragment>
                <MobileMenu className="mobile-menu"></MobileMenu>
            </Fragment>
        )
    }
}

export default MobileMenu
