import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Example5 from "./components/Example5";
import Example6 from "./components/Example6";

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/example1">Example1 - Side effect: counter</Link>
        </li>
        <li>
          <Link to="/example2">Example2 - Side effect: document.title </Link>
        </li>
        <li>
          <Link to="/example3">
            Example3 - Referential equality check: simple value
          </Link>
        </li>
        <li>
          <Link to="/example4">
            Example4 - Referential equality check: array
          </Link>
        </li>
        <li>
          <Link to="/example5">
            Example5 - Referential equality check: array, Immutable.js
          </Link>
        </li>
        <li>
          <Link to="/example6">
            Example6 - Referential equality check: array, Immer.js
          </Link>
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
        <Route path="/example4">
          <Example4 />
        </Route>
        <Route path="/example5">
          <Example5 />
        </Route>
        <Route path="/example6">
          <Example6 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
