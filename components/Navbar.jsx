import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../src/assets/logo.jpg";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext/userContext";
import { CartContext } from "../contexts/cartContext/cartContext";
import { logout } from "../util/firebase-util";
import CartIcon from "./CartIcon";
import CartPopup from "./CartPopup";

export default function Navbar() {
  let { user} = useContext(UserContext);

  let { cartState, setCartState } = useContext(CartContext);

  let cartTogglehandler = () => {
    setCartState((cartState) => ({
      ...cartState,
      isCartVisible: !cartState.isCartVisible,
    }));
  };

  return (
    <div className={styles["navbar"]}>
      <div className={styles["logo"]}>
        <img src={logo} alt="logo image"></img>
        <h2>Stylish Clothing</h2>
      </div>

      <Link to={"/"}>HOME</Link>
      <Link to={"/shop"}>SHOP</Link>
      <div className={styles["right"]}>
        {!user ? (
          <Link to={"/sign"}>SIGN IN</Link>
        ) : (
          <Link
            onClick={async () => {
              await logout();
            }}
          >
            SIGN OUT
          </Link>
        )}
        <Link
          onClick={() => {
            cartTogglehandler();
          }}
        >
          <CartIcon count={cartState.products.length} />
        </Link>
      </div>
      {cartState.isCartVisible && <CartPopup />}
    </div>
  );
}
