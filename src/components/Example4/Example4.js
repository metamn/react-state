/**
 * Referential equality check with array
 *
 * @see http://metamn.io/react-best-practices/?path=/docs/memoization--page
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  arr: PropTypes.array
};

/**
 * Defines the default props
 */
const defaultProps = {
  arr: [1, 2, 3]
};

/**
 * Displays the component
 */
const Example4 = props => {
  const { arr } = props;

  /**
   * Referential equality check problems with JS
   */
  console.log("a:", arr);
  console.log("a === [1, 2, 3]:", arr === [1, 2, 3]); // This will give you `false`

  /**
   * This is a side effect in terms of Functional Reactive Programming.
   *
   * `useState` is an async container to manage the change of `values`
   */
  const [values, setValues] = useState(arr);

  /**
   * A function to demonstrate referential equality check problems in JS.
   *
   * The new `values` will be the same `[1, 2, 3]` but still not equal with the old `values`,
   */
  const changeValues = props => {
    const arr2 = [1, 2, 3];
    setValues(arr2);
  };

  /**
   * Setting the document title is a side effect in terms of Functional Reactive Programming.
   *
   * `useEffect` is an async container to manage the change of the document title.
   */
  useEffect(() => {
    document.title = `Values: ${JSON.stringify(values)}`;
    console.log("This is executed every time the `values` are changed.");
  }, [values]);

  return (
    <div className="Example4">
      <h3>Example4</h3>
      <p>Referential equality check with an array.</p>
      <p>
        This is tricky because:{" "}
        <code> const arr = [1, 2, 3]; arr === [1, 2, 3] // false</code>
      </p>
      <p>
        Therefore on click (
        <code>const arr2 = [1, 2, 3]; setValues(arr2);</code>) the document
        title and `Values: [1, 2, 3]` won't change yet the change function is
        executed inside `useEffect`.
      </p>
      <p>Please check the console log.</p>

      <div>
        <hr />
        <p>Values: {JSON.stringify(values)}</p>
        <button onClick={() => changeValues()}>Click me</button>
      </div>
    </div>
  );
};

Example4.propTypes = propTypes;
Example4.defaultProps = defaultProps;

export default Example4;
export { propTypes as Example4PropTypes, defaultProps as Example4DefaultProps };
