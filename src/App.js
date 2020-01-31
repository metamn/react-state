import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/example1">Example1</Link>
        </li>
        <li>
          <Link to="/example2">Example2</Link>
        </li>
        <li>
          <Link to="/example3">Example3</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/example1">
          <Example1 />
        </Route>
        <Route path="/example2">
          <Example2 />
        </Route>
        <Route path="/example3">
          <Example3 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
