import React, { Component } from "react";
import styled from "styled-components";

class TopNotification extends Component {
  render() {
    const Notification = styled.div`
      background: #000;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      position: relative;
      z-index: 3;
      color: #fff
    `;
    return <Notification>
        <p><strong>Spring Sale!</strong> <u>INC2020</u> as coupon code</p>
    </Notification>;
  }
}

export default TopNotification;
