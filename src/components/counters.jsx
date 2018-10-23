import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: "1", name: "pc", count: 4 },
      { id: "2", name: "smartphones", count: 1 },
      { id: "3", name: "notebook", count: 3 },
      { id: "4", name: "mp3", count: 4 },
      { id: "5", name: "toys", count: 2 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(c => (
          <Counter key={c.id} counter={c} onDelete={this.handelDelete}>
            <p
              style={{
                width: 100,
                display: "inline-block",
                fontWeight: "bold"
              }}
            >
              {c.name}
            </p>
          </Counter>
        ))}
      </div>
    );
  }

  handelDelete(count) {
    console.log("handleDelete", count);
  }
}

export default Counters;
