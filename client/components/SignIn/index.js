import React, { useEffect, useState } from "react";
import "./SignIn.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { authenticateUser } from "../../reducers/auth";
import { connect } from "react-redux";
import withRouter from "../../withRouter";

const SignIn = (props) => {
  const navigate = useNavigate()
  const { name, handleSubmit, error, isLoggedIn } = props;
  if (isLoggedIn) navigate('/home');

  return (
    <div className="login-container text-center">
      <div className="form-signin w-100 m-auto ">
        <form onSubmit={handleSubmit} name={name}>
          <h1 className="h3 mb-3 fw-normal">Please sign in or sign up</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              placeholder="name@example.com"
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
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>

          <div>
            <button
              className="w-100 btn btn-lg btn-primary mb-2"
              type="submit"
            >
              Sign in
            </button>
            {error && error.response && <div> {error.response.data} </div>}
          </div>
        </form>
      </div>
    </div>
  );
};


const mapState = (state) => {
  return {
    error: state.auth.error,
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = "login";
      const email = evt.target.email.value;
      const password = evt.target.password.value;

      dispatch(authenticateUser(email, password, formName));
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(SignIn));

// export default SignIn;
