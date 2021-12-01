import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

/* ReactDOM - components rendering in the browser. */

/* 
Virtual DOM(tree of element) - a lighter copy of the browser DOM tree. 
Nodes of the tree of element changing lead to the building of a new tree of element and compare with the previous one.
*/

/* JSX
with
ReactDOM.render(
<div>
  <button>TEXT</button>
  </div>
  )

  without
  ReactDOM.render(
  React.createElement("div",{},
  React.createElement("button",{},"TEXT")
  )
)
parameters:
1)type
2)props
3)children
 */

