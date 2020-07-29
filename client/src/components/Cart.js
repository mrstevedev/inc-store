import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <h1>Your bag is empty</h1>
                <a className="continue__shopping--btn btn" href="/">Continue Shopping</a>
                <p>
                Need help? Call 1.888.282.6060 or chat with us
                </p>            
                <p>Shipping internationally?</p>
            </div>
        )
    }
}
