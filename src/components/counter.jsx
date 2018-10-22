import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    tags: ["pc", "smartphones", "sounds"]
  };
  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.counter > 0 ? "primary" : "warning";

    return (
      <div>
        <span className={classes}>{this.increment()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  increment() {
    return this.state.counter;
  }
}

export default Counter;
