import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../src/assets/logo.jpg";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext/cartContext";
import { logout } from "../util/firebase-util";
import CartIcon from "./CartIcon";
import CartPopup from "./CartPopup";
import { useSelector, useDispatch } from 'react-redux'
import { login,logout as signOut } from '../store/slices/userReducer'

export default function Navbar() {

  let context = useContext(CartContext);
  let { cartItems, isPopupVisible, togglePopupVisibility } = context;


  let dispatch = useDispatch();

  let user = useSelector((state)=>state.user.value);

  return (
    <div className={styles["navbar"]}>
      <div className={styles["logo"]}>
        <img src={logo} alt="logo image"></img>
        <h2>Stylish Clothing</h2>
      </div>

      <Link to={"/"}>HOME</Link>
      <Link to={"/shop"}>SHOP</Link>
      <div className={styles["right"]}>
        {user ? (
          <Link
            onClick={async () => {
              await logout();
              dispatch(signOut());
            }}
          >
            SIGN OUT
          </Link>
        ) : (
          <Link to={"/sign"}>SIGN IN</Link>
        )}
        <Link
          onClick={() => {
            togglePopupVisibility();
          }}
        >
          <CartIcon count={cartItems.length} />
        </Link>
      </div>
      {isPopupVisible && <CartPopup />}
    </div>
  );
}
