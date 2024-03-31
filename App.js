import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>Hi there! This is Amtul</h1>;
};
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1>I am sad and overworked</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
