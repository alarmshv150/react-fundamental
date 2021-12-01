import { Component } from "react";

export default class ModernClassComponentSyntax extends Component {
  /* use constructor if state depended of props */
  state = {
    count: 0,
  };
  /* binding context with array function*/
  increment = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () =>
        console.log(
          this.state.count
        ) /* guarantee updated values request from state*/
    );
  };
  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Увеличить</button>

        <button
          onClick={/* binding context with bind */ this.increment.bind(this)}
        ></button>

        <button
          onClick={/* dynamic context binding */ (e) => this.increment(e)}
        ></button>

        <button
          onClick={
            /* inline function */ () =>
              this.setState({ count: this.state.count + 1 })
          }
        ></button>
      </>
    );
  }
}
