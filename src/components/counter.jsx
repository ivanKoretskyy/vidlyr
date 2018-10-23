import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0
  };
  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.counter > 0 ? "primary" : "warning";

    return (
      <div>
        <span className={classes}>{this.increment()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  increment() {
    return this.state.counter;
  }
}

export default Counter;
