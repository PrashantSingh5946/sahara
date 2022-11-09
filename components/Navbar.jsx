import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../src/assets/logo.jpg";
import { logout } from "../util/firebase-util";
import CartIcon from "./CartIcon";
import CartPopup from "./CartPopup";
import { useSelector, useDispatch } from 'react-redux'
import {SET_IS_POPUP_VISIBLE} from '../store/slices/cartReducer'

export default function Navbar() {

  let dispatch = useDispatch();

  let user = useSelector((state)=>state.user.value);
  let cartData = useSelector((state)=> state.cart);

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
            dispatch(SET_IS_POPUP_VISIBLE(!cartData.isPopupVisible))
          }}
        >
          <CartIcon count={cartData.cartItems.length} />
        </Link>
      </div>
      {cartData.isPopupVisible && <CartPopup />}
    </div>
  );
}
