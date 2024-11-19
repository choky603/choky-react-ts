import React from "react";
import { useNavigate } from "react-router";
import useCounterStore from "../store/counterStore";

import Button from "@material-ui/core/Button";

const MainComponent = () => {
  const navigate = useNavigate();

  const { count, increment, decrement, reset } = useCounterStore();

  // function goPage(path: string) {
  //     navigate(`/${path}`);
  // };

  return (
    <>
      <h1>메인 컴포넌트!!!!!!!!</h1>
      <Button
        onClick={() => navigate("/page1")}
        variant="contained"
        color="primary"
      >
        페이지1
      </Button>
      <Button
        onClick={() => navigate("/page2")}
        variant="outlined"
        color="primary"
      >
        페이지2
      </Button>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Counter</h1>
        <p>Current Count: {count}</p>
        <div>
          <button onClick={increment} style={{ marginRight: "10px" }}>
            Increment
          </button>
          <button onClick={decrement} style={{ marginRight: "10px" }}>
            Decrement
          </button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
