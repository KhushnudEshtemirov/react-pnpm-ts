import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>
);
