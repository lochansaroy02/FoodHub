import React from "react";
import * as ReactDOM from 'react-dom';

let header = React.createElement("h1", {}, "Welcome to the internet ");
let header2 = React.createElement("h1", {}, "Welcome to the internet ");
let root = ReactDOM.createRoot(document.getElementById("root")); // assuming you have a div with id 'root' as the target container
root.render(header);
