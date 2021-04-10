import React, { Component } from 'react'
import styled from "styled-components";

export default class Cart extends Component {
    render() {
        const Cart = styled.div`
            margin: 5rem 0 13rem 0;
      `;
        return (
            <Cart>
                <h1>Your bag is empty</h1>
                <a className="continue__shopping--btn btn" href="/">Continue Shopping</a>
                <p>
                Need help? Call 1.888.282.6060 or chat with us
                </p>            
                <p>Shipping internationally?</p>
            </Cart>
        )
    }
}
