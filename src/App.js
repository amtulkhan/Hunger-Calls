import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";

const Applayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
