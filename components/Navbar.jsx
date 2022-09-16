import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../src/assets/logo.jpg";

export default function Navbar() {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["logo"]}>
        <img src={logo} alt="logo image"></img>
        <h2>Stylish Clothing</h2>
      </div>
      <Link to={"/"}>Home</Link>
      <Link to={"/shop"}>Shop</Link>
    </div>
  );
}
