import React from "react";
import { useState, useMemo } from "react";

const slowFunction = (number) => {
  for (let i = 0; i < 10; i++) {}
  return number * 2;
};

const UseMemo = (props) => {
  var [num, setNum] = useState(0);
  var [theme, setTheme] = useState(true);
  var darklight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var doublingNumber = useMemo(() => {
    return slowFunction(num);
  }, [num]);

  return (
    <section>
      <h1>this is usememo example</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => setTheme((theme = !theme))}>taggle theme</button>
      <h2 style={darklight}> helllllo {doublingNumber}</h2>
    </section>
  );
};

export default UseMemo;
