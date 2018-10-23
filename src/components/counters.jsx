import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: "1", name: "pc", count: 0 },
      { id: "2", name: "smartphones", count: 0 },
      { id: "3", name: "notebook", count: 0 },
      { id: "4", name: "mp3", count: 0 },
      { id: "5", name: "toys", count: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(c => (
          <Counter key={c.id} />
        ))}
      </div>
    );
  }
}

export default Counters;
