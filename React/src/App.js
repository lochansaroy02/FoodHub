import React from "react";
import * as ReactDOM from "react-dom/client";
import Header from './Components/Header'
import Body from "./Components/Body";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart"
import { Outlet, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./utils/Store";

const App = () => {
  return (
    <>
    <Provider store={Store}>
      <Header />
      <Outlet />
    </Provider>

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
        path: "Cart",
        element: <Cart />
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
