import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Navbar from "../components/Navbar";
import "./styles/styles.css";
import SignInAndUp from "../components/SignInAndUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../util/firebase-util";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext/userContext";

function App() {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    //Observer
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign" element={<SignInAndUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
