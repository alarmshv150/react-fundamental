import { Component } from "react";

  /* rcc */
export default class ClassCounter extends Component {
  /* rconst */
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  /* context binding */
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  /* changing state */
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

