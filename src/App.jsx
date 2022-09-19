import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Navbar from "../components/Navbar";
import "./styles/styles.css";
import SignInAndUp from "../components/SignInAndUp";
import CheckoutPage from "../components/CheckoutPage";

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign" element={<SignInAndUp />} />
          <Route path="/checkout" element={<CheckoutPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
