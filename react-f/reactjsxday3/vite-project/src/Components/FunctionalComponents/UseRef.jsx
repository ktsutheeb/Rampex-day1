import React, { useEffect } from "react";
import { useRef, useState } from "react";

const UseRef = () => {
  var [text, setText] = useState(""); //(0)
  var prevText = useRef(""); //(0)
  useEffect(() => {
    prevText.current = text;
  }, [text]);

  return (
    <section>
      <h1>This is the example of useRef</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      {/* //text is number */}
      <h2>My current render is {text}</h2>
      <h2>My current render is {prevText.current}</h2>
    </section>
  );
};

export default UseRef;

// import React from "react";
// import { useState, useRef } from "react";
// const UseRef() => {
//     var [text, setText] = useState("")
//     var prevText = useRef()
//     return()
// }
