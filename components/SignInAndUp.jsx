import React, { useState } from "react";
import {
  createNewUserWithEmailAndPassword as signUp,
  signInWithValues as signIn,
} from "../util/firebase-util";
import styles from "./SignInAndUp.module.css";

const defaultData = {
  email: "",
  password: "",
};
export default function SignInAndUp() {
  const [state, setState] = useState(defaultData);

  const changeHandler = (event) => {
    let { name, value } = event.target;
    setState((state) => ({ ...state, [name]: value }));
  };

  const signUpHandler = () => {
    signUp(state.email, state.password);
  };

  const signInHandler = () => {
    signIn(state.email, state.password);
  };

  return (
    <div className={styles["card"]}>
      <div>
        <input
          type={"email"}
          onChange={changeHandler}
          name={"email"}
          placeholder="Email"
          required
          value={state.email}
        ></input>
        <input
          type={"password"}
          onChange={changeHandler}
          placeholder="Password"
          name={"password"}
          required
          value={state.password}
        ></input>
      </div>
      <div className={styles["btn-container"]}>
        <button onClick={signUpHandler}>SignUp</button>
        <button onClick={signInHandler}>Login</button>
      </div>

    </div>
  );
}
