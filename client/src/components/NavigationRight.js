import React, { Component, Fragment } from 'react';
import Search from './Search';
import SignInBtn from './SignInBtn';
import styled from 'styled-components';
import CartButton from './CartButton';

class NavigationRight extends Component {
   
    render() {
        const TopRightContainer = styled.div`
            display: flex;
            align-items: center;
        `;
        return (
            <TopRightContainer>
                <Search />
                <SignInBtn />
                <CartButton />
            </TopRightContainer>
        )
    }
}
export default NavigationRight;