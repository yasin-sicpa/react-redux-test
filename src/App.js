import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from "./actions/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>My Counter = {counter}</h1>
      {isLogged ? <h3>very secret information</h3> : ""}
      <button onClick={() => dispatch(incrementNumber())}>+</button>
      <button onClick={() => dispatch(decrementNumber())}>-</button>
    </div>
  );
}

export default App;
