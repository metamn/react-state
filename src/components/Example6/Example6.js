/**
 * Referential equality check with array and Immer.js
 *
 * @see https://immerjs.github.io/immer/docs/example-setstate
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import produce from "immer";
import { useImmer } from "use-immer";

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
const Example6 = props => {
  const { arr } = props;
  const arr2 = [1, 2, 3];

  /**
   * Referential equality check problems with JS
   */
  console.log("a:", arr);
  console.log("arr === arr2:", arr === arr2); // This will give you `false`

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
    setValues(produce(draft => (draft = arr2)));
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

  const [values2, setValues2] = useImmer(arr);

  const changeValues2 = props => {
    setValues(draft => (draft = arr2));
  };

  useEffect(() => {
    document.title = `Values: ${JSON.stringify(values2)}`;
    console.log("This is executed every time the `values` are changed.");
  }, [values2]);

  return (
    <div className="Example6">
      <h3>Example6</h3>
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

      <div>
        <hr />
        <p>Values2: {JSON.stringify(values2)}</p>
        <button onClick={() => changeValues2()}>Click me 2</button>
      </div>
    </div>
  );
};

Example6.propTypes = propTypes;
Example6.defaultProps = defaultProps;

export default Example6;
export { propTypes as Example6PropTypes, defaultProps as Example6DefaultProps };
