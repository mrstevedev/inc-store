import React, { Component } from 'react'
import styled from 'styled-components';

export class IncAd extends Component {
    render() {
        const IncAd = styled.div`
            background: #000;
            height: 200px;
            width: 100%;
            margin: 4rem 0;
        `;
        return (
            <IncAd></IncAd>            
        )
    }
}

export default IncAd
