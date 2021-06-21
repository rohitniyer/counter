import React from "react";

const CounterValue = ({ count }) => {
  return (
    <div className="countervalue-container">
      <h5>Counter Value is</h5>
      <p>{count}</p>
    </div>
  );
};

export default CounterValue;
