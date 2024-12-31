// // class classex{
// //     a=10
// //     methodex = () => {
// //         console.log("welcome")
// //         // return "fdsfgf"
// //     }
// // }

// // var obj = new classex()
// // console.log(obj.a)
// // console.log(obj.methodex())

// import React from "react";

// // class classexx extends React.Component{
// //     render(
// //         <></>
// //     )
// // }

// export default classexx
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  // var s = {
  //   color: "white",
  // };
  return (
    // <div>
    //   <p style={s}>Take Take Take</p>
    // </div>
    <header>
      <nav>
        <ul>
          <p>Thirumalai Traders</p>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="link">
              Gallary
            </Link>
          </li>
          <li>
            <Link to="/newpage" className="link">
              NewPage
            </Link>
          </li>
          <li>
            <Link to="/useeffect" className="link">
              UseEffect
            </Link>
          </li>
          <li>
            <Link to="/useref" className="link">
              UseRef
            </Link>
          </li>
          <li>
            <Link to="/usecontext" className="link">
              UseContext
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
