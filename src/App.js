import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App(props) {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  );
}

export default App;
