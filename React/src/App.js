import React from "react";
import * as ReactDOM from "react-dom/client";
import Header from './Components/Header'
import Body from "./Components/Body";


const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
