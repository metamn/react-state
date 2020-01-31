/**
 * Referential equality check with array and Immutable.js
 *
 * @see https://immutable-js.github.io/immutable-js/
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { List } from "immutable";

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
  arr: List([1, 2, 3])
};

/**
 * Displays the component
 */
const Example5 = props => {
  const { arr } = props;
  const arr2 = List([1, 2, 3]);

  /**
   * Referential equality check problems solved with Immutable
   */
  console.log("arr === arr2 :", arr === List([1, 2, 3])); // This will give you `false`
  console.log("arr.equals(arr2) :", arr.equals(arr2)); // This will give you `true`

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
    <div className="Example5">
      <h3>Example5</h3>
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

Example5.propTypes = propTypes;
Example5.defaultProps = defaultProps;

export default Example5;
export { propTypes as Example5PropTypes, defaultProps as Example5DefaultProps };
