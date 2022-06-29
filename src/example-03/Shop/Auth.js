import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { authAction } from "../../store/example-03/auth-slice";

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(authAction.login());
  }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onClick={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
