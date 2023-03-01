import App from "./App";
import { createRoot } from "react-dom/client";

import "./styles/reset.css";
import "./styles/base.css";
import "./styles/variables.css";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AlertProvider template={AlertTemplate}>
    <App />
  </AlertProvider>
);

// https://github.com/schiehll/react-alert
// msg: ReactDOM.render is no longer supported
// import ReactDOM from "react-dom";
// ReactDOM.render(<App />, document.querySelector("#root"));

// import { render } from "react-dom";

// const Root = () => (
//   <AlertProvider template={AlertTemplate}>
//     <App />
//   </AlertProvider>
// );

// render(<Root />, document.getElementById("root"));

//---------------

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// // 👇️ if you use TypeScript, add non-null (!) assertion operator
// // const root = createRoot(rootElement!);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
