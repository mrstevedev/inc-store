import React, { PureComponent, Fragment } from "react";

export default class MobileMenuToggler extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className="menu">
          <div className="menu-icon">
            <input className="menu-icon__checkbox" type="checkbox" onClick={this.props.handleMenuOpen} />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
