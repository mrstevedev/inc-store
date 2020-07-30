import React, { PureComponent } from 'react'
import styled from 'styled-components'

export default class FormBtn extends PureComponent {
    render() {
        const Button = styled.button`
            background:#000;
            padding: 0.8rem 2rem;
            color: #fff;
            width: 100%;
            border: solid 1px #000;
            margin: 1rem 0;
            cursor: pointer;
            outline: none;
            // border-radius: 3px;
            transition: .12s ease-in-out;
            &:hover {
                background: #fff;
                border: solid 1px #000;
                color: #000;
            }
            &:active {
                background: #000;
                border: solid 1px #000;
                color: #fff;
            }
        `;
        return <Button onClick={this.props.handleSignIn}>{ this.props.btnText }</Button>
    }
}
