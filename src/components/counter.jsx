import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: this.props.counter
  };
  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count > 0 ? "primary" : "warning";

    return (
      <div>
        {this.props.children}
        <span className={classes}>{this.increment()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.state.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  increment() {
    return this.state.counter.count;
  }
}

export default Counter;
