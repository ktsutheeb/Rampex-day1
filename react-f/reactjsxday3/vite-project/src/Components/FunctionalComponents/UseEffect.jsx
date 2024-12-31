import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
const UseEffect = () => {
  //   var [text, setText] = useState("kex");
  //   useEffect(() => {
  //     setText("konfu");
  //   }, []);

  //   return (
  //     <section>
  //       <input
  //         type="text"
  //         placeholder="ur text"
  //         value={text}
  //         onChange={(e) => {
  //           setText(e.target.value);
  //         }}
  //       />
  //       <h3>your text is {text}</h3>
  //     </section>
  //   );
  var [post, setPost] = useState([]); //post is an array type

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPost(res.data);
      }) //anonumis function
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <h1>getting data from json placeholder api</h1>
      <h2>postes are</h2>
      <ol>
        {post.map((item) => (
          // <li key={item.userId}>{item.title}</li>
          <li>{item.title}</li>
        ))}
      </ol>
    </section>
  );
};

export default UseEffect;

// import React, { useState, useEffect } from "react";

// const Contact = (props) => {
//     const [track, settrack] = useState(false);
//     console.log(track);
//     useEffect(() => {
//       if (track) {
//         console.log("good");
//       } else {
//         console.log("bad");
//       }
//     }, [track]);
//     return (
//       <div>
//         <button
//           onClick={() => {
//             settrack(true);
//           }}
//         >
//           track
//         </button>
//         <button
//           onClick={() => {
//             settrack(false);
//           }}
//         >
//           untrack
//         </button>
//       </div>
//     );
//   };

//   export default Contact;
