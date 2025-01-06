import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Signup = (props) => {
  var [firstName, setFirstName] = useState("");
  var [lastName, setLastName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var { setIsAuthenticated } = useContext(AuthContext);
  var navigate = useNavigate();
  var signingup = async (event) => {
    try {
      //without async and await it is running
    event.preventDefault();
    var req = await axios.post("http://localhost:3001/signup", {
      //not 5173- f.e , 3001-b.e
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    // console.log(req);
    // navigate("/login");

    if (req.data.issignup) {
      navigate("/home");
      setIsAuthenticated(true);
    } else {
      window.alert("Signup failed");
    }
    }
    catch (err) {
      console.log(err)
    }
    
  };
  return (
    <div>
      <h1>SIGNUP</h1>
      <form onSubmit={signingup}>
        <label htmlFor="FirstName">FirstName: </label>
        <input
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required
        ></input>
        <br></br>
        <label htmlFor="LastName">LastName: </label>
        <input
          type="text"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          required
        ></input>
        <br></br>
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br></br>
        <label htmlFor="Password">Password:</label>
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <br></br>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default Signup;
