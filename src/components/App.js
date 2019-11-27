import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "@emotion/styled";

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
  h1,
  p,
  label,
  td,
  th {
    color: ${props => props.theme.body};
  }
`;

function App() {
  return (
    <Wrapper>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
      </div>
    </Wrapper>
  );
}

export default App;
