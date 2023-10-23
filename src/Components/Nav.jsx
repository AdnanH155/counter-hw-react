import React, { Component } from "react";
import Link from "./Link";
class Nav extends Component {
  render() {
    return (
      <nav>
        <link text={"Home"} />
        <link text={"Portfolio"} />
        <link text={"About Me"} />
      </nav>
    );
  }
}

export default Nav;
