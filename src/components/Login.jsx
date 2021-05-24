import React from "react";
import "./Login.css";

const Login = () => (
  <form>
    <label>
      login <input name="login" />
    </label>
    <label>
      password <input name="password" type="password" />
    </label>
    <button type="submit">submit</button>
  </form>
);

export default Login;
