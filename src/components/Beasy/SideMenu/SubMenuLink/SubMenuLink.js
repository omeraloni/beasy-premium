
import React, { Component } from "react";
import { NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import IntlMessages from "Util/IntlMessages";

class SubMenuLink extends Component {
  render() {
    const { link, icon, text , children} = this.props;
    return (
      <NavItem>
        <NavLink to={link}>
          <i className={icon} />{" "}
          <IntlMessages id={text} />
          {children}
        </NavLink>
      </NavItem>
    );
  }
}

export default SubMenuLink