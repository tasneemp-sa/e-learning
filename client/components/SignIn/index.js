import React, { useEffect, useState } from "react";
import "./SignIn.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  authenticate,
  getLogin,
  getLogout,
  getSignup,
  setLogin,
  setLogout,
  setSignup,
} from "../../reducers/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signup = useSelector(getSignup);
  console.log("signup ", signup);
  const login = useSelector(getLogin);
  console.log("login ", login);
  // const {name, displayName, handleSubmit, error} = props
  const logout = useSelector(getLogout);

  async function handleSubmit(evt) {
    if (evt.keyCode === 13) return;
    evt.preventDefault();
    const method = evt.target.name;
    console.log("formName", method);
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    await dispatch(authenticate({ email, password, method }));
    evt.target.email.value = "";
    evt.target.password.value = "";
    console.log(
      "token on method",
      method,
      " ",
      window.localStorage.getItem("token")
    );
    if (window.localStorage.getItem("token") !== null && method === "login") {
      // dispatch(setLogout());
      navigate("/home");
    } else if (method === "signup") {
      dispatch(setLogin());
    }
  }

  async function handleLogin() {
    await dispatch(setLogin());
  }

  async function handleSignUp() {
    await dispatch(setSignup());
  }

  useEffect(() => {
    window.localStorage.removeItem("token");
  }, []);

  return (
    <div className="login-container text-center">
      <div className="form-signin w-100 m-auto ">
        <form onSubmit={(evt) => handleSubmit(evt)} name={login !== "" ? "login" : "signup"}>
          <h1 className="h3 mb-3 fw-normal">Please sign in or sign up</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              placeholder="name@example.com"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          {signup === 'Sign Up' ? (
            <div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" >
            Sign Up
          </button>
          </div>
          ) : (
            <div>
            <button className="w-100 btn btn-lg btn-primary mb-2" type="submit" onClick={() => handleLogin()}>
            Sign in
          </button>
          <button className="w-100 btn btn-lg btn-primary" onClick={() => handleSignUp()} >
            Sign Up
          </button>
          </div>
          ) }
          
          {/* <p className="mt-5 mb-3 text-muted">&copy; 2023</p> */}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
