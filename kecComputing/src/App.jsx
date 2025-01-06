// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './Components/FunctionalComponents/func'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>

//         {/* <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a> */}
// <iframe width="560" height="315" src="https://www.youtube.com/embed/VNYTH4cmx0I?si=O0wSqQUct0fl-RxT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      </div>
//       <h1>V + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from "react";
import "./App.css";
import Home from "./Components/FunctionalComponents/Home";
import Navbar from "./Navbar";
import Gallary from "./Components/FunctionalComponents/Gallary";
import NewPage from "./Components/FunctionalComponents/NewPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Components/FunctionalComponents/Footer";
import UseEffect from "./Components/FunctionalComponents/UseEffect";
import UseRef from "./Components/FunctionalComponents/UseRef";
import UseContext from "./Components/FunctionalComponents/UseContext";
import UseMemo from "./Components/FunctionalComponents/UseMemo";
import Signup from "./Components/FunctionalComponents/signup";
import Login from "./Components/FunctionalComponents/Login";

function App() {
  return (
    <>
      <div className="x">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home place="erode" jail1="kongu arts" jail2="ai" />}
            />
            <Route path="/gallery" element={<Gallary />} />
            <Route path="/newpage" element={<NewPage />} />
            <Route path="/useeffect" element={<UseEffect />} />
            <Route path="/useref" element={<UseRef />} />
            <Route path="/usecontext" element={<UseContext />} />
            <Route path="/usememo" element={<UseMemo />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
        <Footer />

        {/* <Home place="erode" jail1="kongu arts" jail2="ai" />
        <Gallary />
        <NewPage /> */}
      </div>
    </>
  );
}

export default App;
