import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";

import { hydrate, render } from "react-dom";
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Main />, rootElement);
} else {
  render(<Main />, rootElement);
}
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Main />);
