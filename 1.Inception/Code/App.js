import React from "react";
import * as ReactDOM from "react-dom";

// React Element
let header = (
  <h1
    id="head"
    style={{
      color: "white",
      background: "green",
      fontFamily: "cursive",
      paddingLeft: "10px",
    }}
  >
    This is heading created by jsx 🚀
  </h1>
);
//React component ( arrow function which returns react element ())

let Header = () => (
  <div>
    <Header2 />
    <h1
      id="head"
      style={{
        color: "white",
        background: "green",
        fontFamily: "cursive",
        paddingLeft: "10px",
      }}
    >
      This is heading created by jsx 🚀
    </h1>
  </div>
);

let root = ReactDOM.createRoot(document.getElementById("root")); // assuming you have a div with id 'root' as the target container
root.render(<Header2 />);
import React from "react";
