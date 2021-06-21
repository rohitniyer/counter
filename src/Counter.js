import React from "react";

const Counter = ({ count, setCount, fetchPost }) => {
  let inputValue = count;
  const increment = () => {
    if (isNaN(inputValue) || inputValue === "") {
      console.log("inside if of increment value of increment is", inputValue);
      setCount("0");
      return;
    } else if (parseInt(count) + 1 > 1000) {
      fetchPost("1000");
      setCount("1000");
      return;
    }
    // setCount(count + 1);
    setCount((prevCount) => {
      return (prevCount = (parseInt(prevCount) + 1).toString());
    });
    fetchPost((parseInt(count) + 1).toString());
  };
  const decrement = () => {
    if (isNaN(inputValue) || inputValue === "") {
      setCount("0");
      fetchPost("0");
      return;
    } else if (count === "") {
      setCount("");
      fetchPost("");
      return;
    }
    setCount(count - 1);
    fetchPost(count - 1);
  };

  const inputNumberHandler = (e) => {
    inputValue = e.target.value;
    if (inputValue === "") {
      setCount("");
      fetchPost("0");
      return;
    } else if (+inputValue > 1000) {
      setCount("1000");
      fetchPost("1000");
      return;
    }
    setCount(inputValue);
    fetchPost(inputValue);
    return;
  };

  return (
    <div className="counter-input">
      <button className="minus" onClick={decrement}>
        -
      </button>
      <input
        type="number"
        name="inputName"
        value={count}
        onChange={inputNumberHandler}
        pattern="^(?:-?[1-9]\d*$)|(?:^0)$"
      />
      <button className="plus" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
