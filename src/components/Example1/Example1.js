/**
 * The simplest example with `useState`
 *
 * @see https://reactjs.org/docs/hooks-state.html
 */

import React, { useState } from "react";
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
const Example1 = props => {
  /**
   * This is a side effect in terms of Functional Reactive Programming.
   *
   * `useState` is an async container to manage the change of `count`
   */
  const [count, setCount] = useState(0);

  return (
    <div className="Example1">
      <h3>Example1</h3>
      <p>The simplest example with `useState`</p>

      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
};

Example1.propTypes = propTypes;
Example1.defaultProps = defaultProps;

export default Example1;
export { propTypes as Example1PropTypes, defaultProps as Example1DefaultProps };
