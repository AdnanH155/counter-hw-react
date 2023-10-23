import React, { Component } from "react";
import Nav from "./Nav";
import Link from "./Link";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Adnan Hussain's Portfolio Website</h1>
        <Nav />
        <Link />
      </header>
    );
  }
}

export default Header;
