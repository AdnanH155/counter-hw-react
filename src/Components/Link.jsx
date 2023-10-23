import React, { Component } from "react";
class Link extends Component {
  render() {
    return (
      <>
        <a className="Link" href="#">
          {this.props.text}
        </a>
      </>
    );
  }
}

export default Link;
