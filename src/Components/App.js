import React, { Component } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Link from "./Link";
import Nav from "./Nav";
class App extends Component {
  state = { count: 1 };

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };
  divide = () => {
    this.setState({ count: this.state.count / 2 });
  };
  multiple = () => {
    this.setState({ count: this.state.count * 4 });
  };
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Main />
        <Footer />
        <Link />
        <p>{this.state.count}</p>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.multiple}>X 4</button>
        <button onClick={this.divide}>/ 2</button>
      </div>
    );
  }
}

export default App;
