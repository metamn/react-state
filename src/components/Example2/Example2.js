/**
 * The simplest example with `useEffect`
 *
 * @see https://reactjs.org/docs/hooks-effect.html
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const Example2 = props => {
  /**
   * Adding the `count` variable is a side effect in terms of Functional Reactive Programming.
   *
   * `useState` is an async container to manage the change of `count`.
   */
  const [count, setCount] = useState(0);

  /**
   * Setting the document title is a side effect in terms of Functional Reactive Programming.
   *
   * `useEffect` is an async container to manage the change of the document title.
   */
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("This is executed every time the component renders");
  });

  return (
    <div className="Example2">
      <h3>Example2</h3>

      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
};

Example2.propTypes = propTypes;
Example2.defaultProps = defaultProps;

export default Example2;
export { propTypes as Example2PropTypes, defaultProps as Example2DefaultProps };
