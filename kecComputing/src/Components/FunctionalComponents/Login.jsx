import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Login = (props) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var navigate = useNavigate();
  var { setIsAuthenticated } = useContext(AuthContext);
  var loginning = async (event) => {
    event.preventDefault();
    // async function func (event) =>{}
    var req = await axios.post("http://localhost:3001/login", {
      //req-request - passing from fe to be code
      email: email,
      password: password,
    });
    console.log(req);

    if (req.data.isLoggedIn) {
      setIsAuthenticated(true)
      navigate("/home");

    } else {
      window.alert(req.data.message);
    }
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={loginning}>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br></br>
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <br></br>
        <input type="submit" />
        <input type="reset" />
      </form>
    </div>
  );
};

export default Login;
