import React, { Component } from "react";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Link from "./Components/Link";
class App extends Component {
  state = { count: 1 };

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.add}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.minus}>-</button>
        <Header />
        <Main />
        <Footer />
        <Link />
      </div>
    );
  }
}

export default App;
