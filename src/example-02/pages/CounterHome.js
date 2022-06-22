import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

import {
  incrementCounter,
  decrementCounter,
} from "../../store/example-02/actions/action";

const CounterHome = () => {
  const { count } = useSelector((state) => state.counter);
  console.log(count);
  const dispatch = useDispatch();
  function increment() {
    dispatch(incrementCounter(count));
  }

  function decrement() {
    dispatch(decrementCounter(count));
  }

  return (
    <>
      <h1>Contador</h1>
      <div>
        <p>{count}</p>
        <button onClick={decrement}>diminuir</button>
        <button onClick={increment}>aumentar</button>
      </div>
    </>
  );
};

export default CounterHome;
