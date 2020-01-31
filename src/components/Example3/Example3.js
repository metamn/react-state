/**
 * The simplest example for referential equality check using `useEffect`
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
const Example3 = props => {
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
    console.log("This is executed every time the `count` value is changed.");
  }, [count]);

  return (
    <div className="Example3">
      <h3>Example3</h3>
      <p>
        The simplest example for referential equality check using `useEffect`
      </p>
      <p>Please check the console log.</p>

      <div>
        <hr />
        <p>
          You clicked {count} times. Also the document title is updated with
          this value.
        </p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>

      <div>
        <p>
          This button won't increase the counter => won't update the document
          title
        </p>
        <button onClick={() => console.log("Button clicked")}>
          Click me 2
        </button>
      </div>
    </div>
  );
};

Example3.propTypes = propTypes;
Example3.defaultProps = defaultProps;

export default Example3;
export { propTypes as Example3PropTypes, defaultProps as Example3DefaultProps };
