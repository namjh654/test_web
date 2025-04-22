import ReactDOM from "react-dom/client";
import App from "./App";
import { worker } from "./mocks/browser";
import React from "react";

// if (import.meta.env.DEV) {
//   worker.start();
// }

// if (import.meta.env.DEV) {
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     const whyDidYouRender = require("@welldone-software/why-did-you-render");
//     whyDidYouRender(React, {
//       trackAllPureComponents: true,
//       trackExtraHooks: [[require("react-redux"), "useSelector"]],
//       logOnDifferentValues: true,
//     });
//   }

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
