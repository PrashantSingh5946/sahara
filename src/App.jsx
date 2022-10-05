import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Navbar from "../components/Navbar";
import "./styles/styles.css";
import SignInAndUp from "../components/SignInAndUp";
import CheckoutPage from "../components/CheckoutPage";
import CategoryPage from "../components/CategoryPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../util/firebase-util";
import { login, logout as signOut } from "../store/slices/userReducer";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (data) => {
      if (data) {
        dispatch(login(data));
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
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/shop/:category" element={<CategoryPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
