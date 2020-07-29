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
    `;
    return <Notification>
        <p><strong>Summer Sale!</strong> INC2020 as coupon code</p>
    </Notification>;
  }
}

export default TopNotification;
