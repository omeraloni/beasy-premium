
import classnames from "classnames";
import React, { Component } from "react";
import { NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import IntlMessages from "Util/IntlMessages";

class SideMenuLink extends Component {
  render() {
    const { classes, link, clicked, icon, text } = this.props;
    return (
      <NavItem
        className={classnames(classes)}
      >
        <NavLink
          to={link}
          onClick={clicked}
        >
          <i className={icon} />{" "}
          <IntlMessages id={text} />
        </NavLink>
      </NavItem>

    );
  }
}

export default SideMenuLink