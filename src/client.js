import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.hydrate(<App initialText="Rendered on the client side!" />, document.getElementById("root"));
