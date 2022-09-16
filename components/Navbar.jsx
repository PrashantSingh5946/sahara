import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../src/assets/logo.jpg";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext/userContext";
import { logout } from "../util/firebase-util";

export default function Navbar() {
  let [user, setUser] = useContext(UserContext);
  return (
    <div className={styles["navbar"]}>
      <div className={styles["logo"]}>
        <img src={logo} alt="logo image"></img>
        <h2>Stylish Clothing</h2>
      </div>

      <Link to={"/"}>Home</Link>
      <Link to={"/shop"}>Shop</Link>
      {!user ? (
        <Link to={"/sign"}>SignIn</Link>
      ) : (
        <Link
          onClick={async () => {
            await logout();
          }}
        >
          Sign Out
        </Link>
      )}
    </div>
  );
}
