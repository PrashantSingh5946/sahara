import React, { createContext, useReducer, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../util/firebase-util";
import { useEffect } from "react";

export const UserContext = createContext(null);

const userReducer = (state, action) => {
  let { type, payload } = action;
  if (type == "SET_USER") {
    return payload;
  } else {
    return state;
  }
};

export default function UserContextProvider(props) {
  const [user, dispatch] = useReducer(userReducer, null);

  const setUser = (data) => dispatch({ type: "SET_USER", payload: data });

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
