import React from "react";
import * as ReactDOM from "react-dom/client";
import Header from './Components/Header'
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />

    </>
  );
};

const routedData = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/rest/:id",
        element: <Menu />
      }

    ]
  }




])



let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routedData} />);
