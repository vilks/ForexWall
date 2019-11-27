import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore.dev";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "./components/ThemeContext";

const store = configureStore();

render(
  <ThemeProvider>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </ThemeProvider>,
  document.getElementById("app")
);
