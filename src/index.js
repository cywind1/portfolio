import App from "./App";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/reset.css";
import "./styles/base.css";
import "./styles/variables.css";

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// // msg: ReactDOM.render is no longer supported
// import ReactDOM from "react-dom";
// ReactDOM.render(<App />, document.querySelector("#root"));
