import React, { useState, useEffect } from "react";
import "./App.css";
import Counter from "./Counter";
import CounterValue from "./CounterValue";
const App = () => {
  const [postNumber, setPostNumber] = useState(false);
  const [count, setCount] = useState("");
  // console.log(typeof count);
  // console.log("value of count is", count);
  useEffect(() => {
    fetchNumber();
  }, []);

  const fetchNumber = async () => {
    const data = await fetch(
      ` https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json`
    );
    const response = await data.json();
    // console.log("response is", response);
    setCount(response.toString());
  };

  const fetchPost = async (number) => {
    setPostNumber(true);
    try {
      const posted = await fetch(
        "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ counter1: parseInt(number) }),
        }
      );
      const text = await posted.text();
      // console.log("text is", text);
      setPostNumber(false);
    } catch (error) {
      setPostNumber(false);
      // console.log(error);
    }
  };

  return (
    <>
      <div className="counter-container">
        <div className="holder">
          <div className="heading">
            {postNumber ? (
              <div className="save-count">
                <div class="loader"></div>
                <h5>Saving count value is </h5>
              </div>
            ) : (
              ""
            )}
          </div>
          <Counter
            count={count}
            setCount={setCount}
            fetchPost={fetchPost}
            setPostNumber={setPostNumber}
            postNumber={postNumber}
          />
          <CounterValue count={count} />
        </div>
      </div>
    </>
  );
};

export default App;
