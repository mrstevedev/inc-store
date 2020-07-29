import React, { Component, Fragment } from 'react'
import styled from "styled-components";

export class Navigation extends Component {
    
    render() {
        const UnorderedList = styled.ul`
            @media(min-width: 465px) {
                display: flex;
                margin: 0;
                list-style: none;
                padding: 0;
            }
            @media(max-width: 465px) {
                display: none;
            }
        `;
        const ListItem = styled.li`
            padding: 0 2rem 0 2rem;
        `;
        return (
            <Fragment>
                <UnorderedList>
                    <ListItem><a className="active" href="#">Sale</a></ListItem>
                    <ListItem><a href="#">Women</a></ListItem>
                    <ListItem><a href="#">Men</a></ListItem>
                    <ListItem><a href="#">Beauty</a></ListItem>
                    <ListItem><a href="#">Brands    </a></ListItem>
                </UnorderedList>
            </Fragment>
        )
    }
}

export default Navigation
