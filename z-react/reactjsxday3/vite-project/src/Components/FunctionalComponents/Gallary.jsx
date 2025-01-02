import { useState } from "react";
const Gallary = () => {
  var counter = 0;
  const [count, setCount] = useState(0);
  function incre() {
    setCount((count) => count + 1);
  }
  return (
    <section>
      <h2 style={{ textAlign: "center" }}>learning states</h2>
      <h1>galleryyy</h1>
      <h1 onClick={incre}>the state of my variable counter is {count} times</h1>
    </section>
  );
};
export default Gallary;
